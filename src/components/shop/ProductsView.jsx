// react
import React, { useCallback, useState } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import Pagination from '../shared/Pagination';
import ProductCard from '../shared/ProductCard';
import {
    LayoutGrid16x16Svg,
    LayoutGridWithDetails16x16Svg,
    LayoutList16x16Svg,
} from '../../svg';
import { sidebarOpen } from '../../store/sidebar';

function useSetOption(option, filter, dispatch) {
    const callback = useCallback(filter, []);

    return useCallback((data) => {
        dispatch({
            type: 'SET_OPTION_VALUE',
            option,
            value: callback(data),
        });
    }, [option, callback, dispatch]);
}

function ProductsView(props) {
    const {
        isLoading,
        productsList,
        options,
        filters,
        dispatch,
        layout: propsLayout,
        grid,
        offcanvas,
    } = props;
    const [layout, setLayout] = useState(propsLayout);

    const handlePageChange = useSetOption('page', parseFloat, dispatch);

    const handleResetFilters = useCallback(() => {
        dispatch({ type: 'RESET_FILTERS' });
    }, [dispatch]);

    let viewModes = [
        { key: 'grid', title: 'Grid', icon: <LayoutGrid16x16Svg /> },
        { key: 'grid-with-features', title: 'Grid With Features', icon: <LayoutGridWithDetails16x16Svg /> },
        { key: 'list', title: 'List', icon: <LayoutList16x16Svg /> },
    ];

    viewModes = viewModes.map((viewMode) => {
        const className = classNames('layout-switcher__button', {
            'layout-switcher__button--active': layout === viewMode.key,
        });

        return (
            <button
                key={viewMode.key}
                title={viewMode.title}
                type="button"
                className={className}
                onClick={() => setLayout(viewMode.key)}
            >
                {viewMode.icon}
            </button>
        );
    });

    const productsListItems = productsList.items.map((product) => (
        <div key={product.id} className="products-list__item">
            <ProductCard product={product} />
        </div>
    ));

    const rootClasses = classNames('products-view', {
        'products-view--loading': isLoading,
    });

    const viewOptionsClasses = classNames('view-options', {
        'view-options--offcanvas--always': offcanvas === 'always',
        'view-options--offcanvas--mobile': offcanvas === 'mobile',
    });

    let content;

    if (productsListItems.length > 0) {
        content = (
            <div className="products-view__content">

                <div
                    className="products-view__list products-list"
                    data-layout={layout !== 'list' ? grid : layout}
                    data-with-features={layout === 'grid-with-features' ? 'true' : 'false'}
                >
                    <div className="products-list__body">
                        {productsListItems}
                    </div>
                </div>

                <div className="products-view__pagination">
                    <Pagination
                        current={options.page || productsList.page}
                        siblings={2}
                        total={productsList.pages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    } else {
        content = (
            <div className="products-view__empty">
                <div className="products-view__empty-title">No matching items</div>
                <div className="products-view__empty-subtitle">Try resetting the filters</div>
                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleResetFilters}
                >
                    Reset filters
                </button>
            </div>
        );
    }

    return (
        <div className={rootClasses}>
            <div className="products-view__loader" />
            {content}
        </div>
    );
}

ProductsView.propTypes = {
    /**
     * Indicates that products is loading.
     */
    isLoading: PropTypes.bool,
    /**
     * ProductsList object.
     */
    productsList: PropTypes.object,
    /**
     * Products list options.
     */
    options: PropTypes.object,
    /**
     * Products list filters.
     */
    filters: PropTypes.object,
    /**
     * Category page dispatcher.
     */
    dispatch: PropTypes.func,
    /**
     * products list layout (default: 'grid')
     * one of ['grid', 'grid-with-features', 'list']
     */
    layout: PropTypes.oneOf(['grid', 'grid-with-features', 'list']),
    /**
     * products list layout (default: 'grid')
     * one of ['grid-3-sidebar', 'grid-4-full', 'grid-5-full']
     */
    grid: PropTypes.oneOf(['grid-3-sidebar', 'grid-4-full', 'grid-5-full']),
    /**
     * indicates when sidebar should be off canvas
     */
    offcanvas: PropTypes.oneOf(['always', 'mobile']),
};

ProductsView.defaultProps = {
    layout: 'grid',
    grid: 'grid-3-sidebar',
    offcanvas: 'mobile',
};

const mapDispatchToProps = {
    sidebarOpen,
};

export default connect(
    () => ({}),
    mapDispatchToProps,
)(ProductsView);
