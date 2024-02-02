// react
import React, { useEffect, useState } from 'react';

// third-party
import { Link } from 'react-router-dom';

// application
import StroykaSlick from '../shared/StroykaSlick';

// data stubs
import brands from '../../data/shopBrands';
import axios from 'axios';
import axiosClient from '../utils/axios';

const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export default function BlockBrands() {

    const [brandsAll, setBrandsAll] = useState([])

    useEffect(() => {
        axiosClient.get('/api/brands')
            .then(function (response) {
                const brands = response.data;
                setBrandsAll(brands)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    const brandsList = brandsAll.map((brand, index) => (
        <div key={index} className="block-brands__item" >
            <Link to={`urunler/${brand.slug}`}><img src={brand.image} alt="" /></Link>
        </div>
    ));

    return (
        <div className="block block-brands " style={{ marginBottom: "0px" }}>
            <div className="container">
                <div class="block-header">
                    <h2>Markalarımız</h2>

                </div>
                <div className="block-brands__slider">
                    <StroykaSlick
                        {...slickSettings}>
                        {brandsList}
                    </StroykaSlick>
                </div>
            </div>
        </div >
    );
}
