// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Redirect, Route, Switch } from 'react-router-dom';

// application
import Footer from './footer';
import MobileHeader from './mobile/MobileHeader';
import MobileMenu from './mobile/MobileMenu';
import Quickview from './shared/Quickview';

// pages
import AccountLayout from './account/AccountLayout';
import AccountPageLogin from './account/AccountPageLogin';
import BlogPageCategory from './blog/BlogPageCategory';
import BlogPagePost from './blog/BlogPagePost';
import PageCart from './shop/ShopPageCart';
import PageCheckout from './shop/ShopPageCheckout';
import PageCompare from './shop/ShopPageCompare';
import PageWishlist from './shop/ShopPageWishlist';
import ShopPageCategory from './shop/ShopPageCategory';
import ShopPageOrderSuccess from './shop/ShopPageOrderSuccess';
import ShopPageProduct from './shop/ShopPageProduct';
import ShopPageTrackOrder from './shop/ShopPageTrackOrder';
import SitePageAboutUs from './site/SitePageAboutUs';
import SitePageCorporate from './site/SitePageCorporate';
import SitePageComponents from './site/SitePageComponents';
import SitePageContactUs from './site/SitePageContactUs';
import SitePageContactUsAlt from './site/SitePageContactUsAlt';
import SitePageFaq from './site/SitePageFaq';
import SitePageNotFound from './site/SitePageNotFound';
import SitePageTerms from './site/SitePageTerms';
import SitePageTypography from './site/SitePageTypography';

// data stubs
import theme from '../data/theme';
import SitePageBrands from './site/SitePageBrands';
import Product from './shared/Product';
import YeniHeader from './header/YeniHeader';
import { ProductCategory } from './product/ProductCategory';
import SitePageHumanResources from './site/SitePageHumanResources';
import SitePageBayilik from './site/SitePageBayilik';

const categoryLayouts = [
    ['/urunler/', { columns: 3, viewMode: 'grid', sidebarPosition: 'start' }],
    ['/shop/category-grid-4-columns-full', { columns: 4, viewMode: 'grid' }],
    ['/shop/category-grid-5-columns-full', { columns: 5, viewMode: 'grid' }],
    ['/shop/category-list', { columns: 3, viewMode: 'list', sidebarPosition: 'start' }],
    ['/shop/category-right-sidebar', { columns: 3, viewMode: 'grid', sidebarPosition: 'end' }],
].map(([url, options]) => (
    <Route
        key={url}
        exact
        path={url}
        render={(props) => <ShopPageCategory {...props} {...options} categorySlug="power-tools" />}
    />
));

const productLayouts = [
    ['/shop/product-standard', { layout: 'standard' }],
    ['/shop/product-columnar', { layout: 'columnar' }],
    ['/shop/product-sidebar', { layout: 'sidebar' }],
].map(([url, options]) => (
    <Route
        key={url}
        exact
        path={url}
        render={(props) => <ShopPageProduct {...props} {...options} productSlug="brandix-screwdriver-screw1500acc" />}
    />
));

function Layout(props) {
    const { match, headerLayout, homeComponent } = props;

    return (
        <React.Fragment>
            <Helmet>
                <title>{theme.name}</title>
                <meta name="description" content={theme.fullName} />
            </Helmet>


            <Quickview />

            <MobileMenu />

            <div className="site">
                <header className="site__header d-lg-none">
                    <MobileHeader />
                </header>

                <header className="site__header d-lg-block d-none">
                    <YeniHeader />
                </header>

                <div className="site__body">
                    <Switch>
                        {/*
                        // Home
                        */}
                        <Route exact path={`${match.path}`} component={homeComponent} />
                        {/*
                        // Shop
                        */}
                        <Redirect exact from="/shop" to="/shop/catalog" />
                        <Route
                            exact
                            path="/urunler"
                            render={(props) => (
                                <ProductCategory />
                            )}
                        />
                        <Route
                            exact
                            path="/urunler/urun/:slug"
                            render={(props) => (
                                <Product
                                    {...props}
                                    columns={3}
                                    viewMode="grid"
                                    sidebarPosition="start"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/urunler/:slug"
                            render={(props) => (
                                <ShopPageCategory
                                    {...props}
                                    columns={3}
                                    viewMode="grid"
                                    sidebarPosition="start"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/urunler/:slug/:slug"
                            render={(props) => (
                                <ShopPageCategory
                                    {...props}
                                    columns={3}
                                    viewMode="grid"
                                    sidebarPosition="start"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/markalarimiz/:slug"
                            render={(props) => (
                                <ShopPageCategory
                                    {...props}
                                    columns={3}
                                    viewMode="grid"
                                    sidebarPosition="start"
                                />
                            )}
                        />

                        {/* Following category layouts only for demonstration. */}
                        {categoryLayouts}


                        {/* Following product layouts only for demonstration. */}
                        {productLayouts}

                        <Route exact path="/shop/cart" component={PageCart} />
                        <Route exact path="/shop/checkout" component={PageCheckout} />
                        <Route exact path="/shop/checkout/success" component={ShopPageOrderSuccess} />
                        <Route exact path="/shop/wishlist" component={PageWishlist} />
                        <Route exact path="/shop/compare" component={PageCompare} />
                        <Route exact path="/shop/track-order" component={ShopPageTrackOrder} />

                        {/*
                        // Blog
                        */}
                        <Redirect exact from="/blog" to="/blog/category-classic" />
                        <Route
                            exact
                            path="/kurumsal/:slug"
                            render={(props) => (
                                <SitePageCorporate {...props} layout="classic" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-classic"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="classic" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-grid"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="grid" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-list"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="list" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-left-sidebar"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="classic" sidebarPosition="start" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/post-classic"
                            render={(props) => (
                                <BlogPagePost {...props} layout="classic" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/post-full"
                            render={(props) => (
                                <BlogPagePost {...props} layout="full" />
                            )}
                        />

                        {/*
                        // Account
                        */}
                        <Route exact path="/account/login" component={AccountPageLogin} />
                        <Route path="/account" component={AccountLayout} />

                        {/*
                        // Site
                        */}
                        <Redirect exact from="/site" to="/site/about-us" />
                        <Route exact path="/hakkimizda" component={SitePageAboutUs} />
                        <Route exact path="/insan-kaynaklari" component={SitePageHumanResources} />
                        <Route exact path="/markalarimiz" component={SitePageBrands} />
                        <Route exact path="/iletisim" component={SitePageContactUs} />
                        <Route exact path="/bayilik-basvurusu" component={SitePageBayilik} />
                        <Route exact path="/site/components" component={SitePageComponents} />
                        <Route exact path="/site/contact-us-alt" component={SitePageContactUsAlt} />
                        <Route exact path="/site/not-found" component={SitePageNotFound} />
                        <Route exact path="/site/faq" component={SitePageFaq} />
                        <Route exact path="/site/terms" component={SitePageTerms} />
                        <Route exact path="/site/typography" component={SitePageTypography} />

                        {/*
                        // Page Not Found
                        */}
                        <Route component={SitePageNotFound} />
                    </Switch>
                </div>

                <footer className="site__footer">
                    <Footer />
                </footer>
            </div>
        </React.Fragment>
    );
}

Layout.propTypes = {
    /**
     * header layout (default: 'classic')
     * one of ['classic', 'compact']
     */
    headerLayout: PropTypes.oneOf(['default', 'compact']),
    /**
     * home component
     */
    homeComponent: PropTypes.elementType.isRequired,
};

Layout.defaultProps = {
    headerLayout: 'default',
};

export default Layout;
