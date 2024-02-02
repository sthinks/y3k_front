// react
import React, { useMemo } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// blocks
import BlockBrands from '../blocks/BlockBrands';
import BlockPosts from '../blocks/BlockPosts';

import AboutUs from '../about/AboutUs';

// data stubs
import theme from '../../data/theme';
import YeniHeader from '../header/YeniHeader';
import { BlockBiliyorMuydunuz } from '../blocks/BlockBiliyorMuydunuz';
import { BlockSlider } from '../blocks/BlockSlider';
import { HomeContact } from '../homecontact/HomeContact';

function HomePageOne() {

    /**
     * Latest products.
     */

    /**
     * Product columns.
     */

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Anasayfa — ${theme.name}`}</title>
            </Helmet>

            {useMemo(() => <BlockSlider />, [])}

            <BlockPosts />

            <AboutUs />

            {/* 
                 <Banner />
            **/}

            <BlockBiliyorMuydunuz />

            {useMemo(() => <BlockBrands />, [])}

            <HomeContact />

            <YeniHeader />

        </React.Fragment>
    );
}

export default HomePageOne;
