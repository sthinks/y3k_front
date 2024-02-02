// react
import React, { useEffect, useState } from 'react';

// third-party
import { Link } from 'react-router-dom';

// application
import StroykaSlick from '../shared/StroykaSlick';

import axiosClient from '../utils/axios';

const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function BlockPosts() {

    const [brandsAll, setBrandsAll] = useState([])

    useEffect(() => {
        axiosClient.get('/api/popular')
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
        <div key={index} style={{ height: "250px" }} >
            <div className='p-3 product-img' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link to={`urunler/urun/${brand.slug}`}>
                    <img src={brand.cover_photo} alt="" style={{ width: "150px", height: "auto" }} />
                </Link>
            </div>
            <div className='product-card__name text-center' style={{ padding: "0px 50px" }} >
                <Link to={`urunler/urun/${brand.slug}`} style={{ textDecoration: "none", cursor: "pointer" }}>
                    <p>{brand.name}</p>
                </Link>
            </div>
        </div>
    ));

    return (
        <div className="block block-brands section-space--inner--120" style={{ marginBottom: "0px" }}>
            <div className="container">
                <div class="block-header">
                    <h2>Popüler Ürünler</h2>
                </div>
                <div className="block-brands__slider" style={{ border: "none", borderRadius: "0px" }}>
                    <StroykaSlick
                        {...slickSettings}>
                        {brandsList}
                    </StroykaSlick>
                </div>
            </div>
        </div >
    );
}
