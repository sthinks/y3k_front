// react
import React, { useEffect, useReducer, useState } from "react";

// third-party
import PropTypes from "prop-types";
import queryString from "query-string";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

// application
import BlockLoader from "../blocks/BlockLoader";
import CategorySidebar from "./CategorySidebar";
import CategorySidebarItem from "./CategorySidebarItem";
import PageHeader from "../shared/PageHeader";
import ProductsView from "./ProductsView";
import shopApi from "../../api/shop";
import WidgetFilters from "../widgets/WidgetFilters";
import { sidebarClose } from "../../store/sidebar";

// data stubs
import theme from "../../data/theme";
import { url, getCategoryParents } from "../../services/utils";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../utils/axios";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { after } from "underscore";

function parseQueryOptions(location) {
    const query = queryString.parse(location);
    const optionValues = {};

    if (typeof query.page === "string") {
        optionValues.page = parseFloat(query.page);
    }
    if (typeof query.limit === "string") {
        optionValues.limit = parseFloat(query.limit);
    }
    if (typeof query.sort === "string") {
        optionValues.sort = query.sort;
    }

    return optionValues;
}

function parseQueryFilters(location) {
    const query = queryString.parse(location);
    const filterValues = {};

    Object.keys(query).forEach((param) => {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

        if (!mr) {
            return;
        }

        const filterSlug = mr[1];

        filterValues[filterSlug] = query[param];
    });

    return filterValues;
}

function parseQuery(location) {
    return [parseQueryOptions(location), parseQueryFilters(location)];
}

function buildQuery(options, filters) {
    const params = {};

    if (options.page !== 1) {
        params.page = options.page;
    }

    if (options.limit !== 12) {
        params.limit = options.limit;
    }

    if (options.sort !== "default") {
        params.sort = options.sort;
    }

    Object.keys(filters)
        .filter((x) => x !== "category" && !!filters[x])
        .forEach((filterSlug) => {
            params[`filter_${filterSlug}`] = filters[filterSlug];
        });

    return queryString.stringify(params, { encode: false });
}

const initialState = {
    init: false,
    /**
     * Indicates that the category is loading.
     */
    categoryIsLoading: true,
    /**
     * Category object.
     */
    category: null,
    /**
     * Indicates that the products list is loading.
     */
    productsListIsLoading: true,
    /**
     * Products list.
     */
    productsList: null,
    /**
     * Products list options.
     *
     * options.page:  number - Current page.
     * options.limit: number - Items per page.
     * options.sort:  string - Sort algorithm.
     */
    options: {},
    /**
     * Products list filters.
     *
     * filters[FILTER_SLUG]: string - filter value.
     */
    filters: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {
                ...state,
                init: true,
                categoryIsLoading: false,
                category: action.category,
            };
        case "FETCH_PRODUCTS_LIST":
            return { ...state, productsListIsLoading: true };
        case "FETCH_PRODUCTS_LIST_SUCCESS":
            return { ...state, productsListIsLoading: false, productsList: action.productsList };
        case "SET_OPTION_VALUE":
            return {
                ...state,
                options: { ...state.options, page: 1, [action.option]: action.value },
            };
        case "SET_FILTER_VALUE":
            return {
                ...state,
                options: { ...state.options, page: 1 },
                filters: { ...state.filters, [action.filter]: action.value },
            };
        case "RESET_FILTERS":
            return { ...state, options: { ...state.options, page: 1 }, filters: {} };
        case "RESET":
            return state.init ? initialState : state;
        default:
            throw new Error();
    }
}

function init(state) {
    const [options, filters] = parseQuery(window.location.search);

    return { ...state, options, filters };
}

function ShopPageCategory(props) {
    const { categorySlug, columns, viewMode, sidebarPosition } = props;
    const offcanvas = columns === 3 ? "mobile" : "always";
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const [latestProducts, setLatestProducts] = useState([]);
    const [productName, setProductName] = useState([]);
    const [brandsName, setBrandsName] = useState([]);
    const [data, setData] = useState([]);
    const [brands, setBrands] = useState([]);
    const { slug } = useParams();
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    useEffect(() => {
        axiosClient
            .get(`/api/category/${slug}`)
            .then(function (response) {
                const products = response.data.products;
                const nameOfProduct = response.data.name;
                setData(products);
                setProductName(nameOfProduct);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    const productImageLoaded = after(data.length, () => {
        setAllImagesLoaded(true);
    });

    useEffect(() => {
        axiosClient
            .get(`/api/brand/${slug}`)
            .then(function (response) {
                setBrands(response.data.products);
                setBrandsName(response.data.name);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    // Replace current url.
    useEffect(() => {
        const query = buildQuery(state.options, state.filters);
        const location = `${window.location.pathname}${query ? "?" : ""}${query}`;
        window.history.replaceState(null, "", location);
    }, [state.options, state.filters]);

    // Load category.
    useEffect(() => {
        let request;
        let canceled = false;

        dispatch({ type: "RESET", categorySlug });

        if (categorySlug) {
            request = shopApi.getCategoryBySlug(categorySlug);
        } else {
            request = Promise.resolve(null);
        }

        request.then((category) => {
            if (canceled) {
                return;
            }

            dispatch({ type: "FETCH_CATEGORY_SUCCESS", category });
        });

        return () => {
            canceled = true;
        };
    }, [dispatch, categorySlug]);

    // Load products.
    useEffect(() => {
        let canceled = false;

        dispatch({ type: "FETCH_PRODUCTS_LIST" });

        shopApi.getProductsList(state.options, { ...state.filters, category: categorySlug }).then((productsList) => {
            if (canceled) {
                return;
            }

            dispatch({ type: "FETCH_PRODUCTS_LIST_SUCCESS", productsList });
        });

        return () => {
            canceled = true;
        };
    }, [dispatch, categorySlug, state.options, state.filters]);

    // Load latest products.
    useEffect(() => {
        let canceled = false;

        if (offcanvas === "always") {
            setLatestProducts([]);
        } else {
            shopApi.getLatestProducts({ limit: 5 }).then((result) => {
                if (canceled) {
                    return;
                }

                setLatestProducts(result);
            });
        }

        return () => {
            canceled = true;
        };
    }, [offcanvas]);

    if (state.categoryIsLoading || (state.productsListIsLoading && !state.productsList)) {
        return <BlockLoader />;
    }

    const breadcrumb = [
        { title: "Anasayfa", url: url.home() },
        { title: "Ürünler", url: "/urunler/gecis-kontrol-sistemleri" },
        { title: `${productName}` },
    ];
    let pageTitle = `${productName}`;
    let brandName = `${brandsName}`;
    let content;

    if (state.category) {
        getCategoryParents(state.category).forEach((parent) => {
            breadcrumb.push({ title: parent.name, url: url.category(parent) });
        });

        breadcrumb.push({ title: state.category.name, url: url.category(state.category) });

        pageTitle = state.category.name;
    }

    const productsView = (
        <ProductsView
            isLoading={state.productsListIsLoading}
            productsList={data}
            options={state.options}
            filters={state.filters}
            dispatch={dispatch}
            layout={viewMode}
            grid={`grid-${columns}-${columns > 3 ? "full" : "sidebar"}`}
            offcanvas={offcanvas}
        />
    );

    const sidebarComponent = (
        <CategorySidebar offcanvas={offcanvas}>
            <CategorySidebarItem>
                <WidgetFilters
                    title="Filters"
                    offcanvas={offcanvas}
                    filters={state.productsList.filters}
                    values={state.filters}
                    dispatch={dispatch}
                />
            </CategorySidebarItem>
        </CategorySidebar>
    );

    if (columns > 3) {
        content = (
            <div className="container">
                <div className="block">{productsView}</div>
                {sidebarComponent}
            </div>
        );
    } else {
        const sidebar = <div className="shop-layout__sidebar col-md-4">{sidebarComponent}</div>;

        content = (
            <div className="container">
                <div className={`shop-layout shop-layout--sidebar--${sidebarPosition}`}>
                    {sidebarPosition === "start" && sidebar}

                    {data.length > 0 ? (
                        <div className="col-md-8">
                            <div className="row row-cols-1 row-cols-md-3 g-1">
                                {data.map((product) => {
                                    return (
                                        <>
                                            {!allImagesLoaded && (
                                                <p style={{ marginRight: "1rem" }}>
                                                    <Skeleton height={200} />
                                                    <Skeleton />
                                                </p>
                                            )}
                                            <div
                                                className="col mb-3"
                                                key={product.name}
                                                style={{ display: allImagesLoaded ? "" : "none" }}
                                            >
                                                <a
                                                    rel="canonical"
                                                    href={`/urunler/urun/${product.slug}`}
                                                    style={{ textDecoration: "none" }}
                                                >
                                                    <div className="card product-card-st" style={{ height: "270px" }}>
                                                        <div
                                                            className="p-3 product-img"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <img
                                                                src={product.cover_photo}
                                                                onLoad={productImageLoaded}
                                                                onError={productImageLoaded}
                                                                style={{ width: "150px", height: "auto" }}
                                                            />
                                                        </div>
                                                        <div className="product-card__name text-center p-1">
                                                            <a
                                                                className="card-title"
                                                                style={{
                                                                    color: "#3d464d",
                                                                    textDecoration: "none",
                                                                    fontWeight: "bold",
                                                                    marginRight: "5px",
                                                                    fontSize: "17px",
                                                                }}
                                                            >
                                                                {product.brand_name}
                                                            </a>
                                                            <span
                                                                className="card-title"
                                                                style={{ color: "#3d464d" }}
                                                            >
                                                                {product.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-8">
                            <div className="row row-cols-1 row-cols-md-3 g-1">
                                {brands.map((brand) => {
                                    return (
                                        <div className="col mb-3" key={brand.name}>
                                            <a rel="canonical" href={`/urunler/urun/${brand.slug}`} style={{ textDecoration: "none" }}>
                                                <div className="card product-card-st" style={{ height: "270px" }}>
                                                    <div
                                                        className="p-3 product-img"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <img
                                                            src={brand.cover_photo}
                                                            style={{ width: "150px", height: "auto" }}
                                                        ></img>
                                                    </div>
                                                    <div className="product-card__name text-center p-1">
                                                        <a
                                                            className="card-title"
                                                            style={{
                                                                color: "#3d464d",
                                                                textDecoration: "none",
                                                                fontWeight: "bold",
                                                                marginRight: "5px",
                                                                fontSize: "17px",
                                                            }}
                                                        >
                                                            {brand.brand_name}
                                                        </a>
                                                        <span
                                                            className="card-title"
                                                            style={{ color: "#3d464d" }}
                                                        >
                                                            {brand.name}
                                                        </span>

                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {sidebarPosition === "end" && sidebar}
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Ürünler — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header={data.length > 0 ? pageTitle : brandsName} breadcrumb={breadcrumb} />

            {content}
        </React.Fragment>
    );
}

ShopPageCategory.propTypes = {
    /**
     * Category slug.
     */
    categorySlug: PropTypes.string,
    /**
     * number of product columns (default: 3)
     */
    columns: PropTypes.number,
    /**
     * mode of viewing the list of products (default: 'grid')
     * one of ['grid', 'grid-with-features', 'list']
     */
    viewMode: PropTypes.oneOf(["grid", "grid-with-features", "list"]),
    /**
     * sidebar position (default: 'start')
     * one of ['start', 'end']
     * for LTR scripts "start" is "left" and "end" is "right"
     */
    sidebarPosition: PropTypes.oneOf(["start", "end"]),
};

ShopPageCategory.defaultProps = {
    columns: 3,
    viewMode: "grid",
    sidebarPosition: "start",
};

const mapStateToProps = (state) => ({
    sidebarState: state.sidebar,
    page: state.category,
});

const mapDispatchToProps = () => ({
    sidebarClose,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageCategory);
