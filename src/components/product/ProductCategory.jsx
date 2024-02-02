import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sagok } from '../../svg';
import PageHeader from '../shared/PageHeader';
import axiosClient from '../utils/axios';

export const ProductCategory = () => {

    const [category, setCategory] = useState([]);

    const breadcrumb = [
        { title: "Anasayfa", url: "/" },
        { title: "Ürünler", url: "" },
    ];

    useEffect(() => {
        axiosClient
            .get(`/api/categories`)
            .then(function (response) {
                setCategory(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Ürünler — `}</title>
            </Helmet>

            <PageHeader header="Ürünler" breadcrumb={breadcrumb} />
            <div className='mb-3'>
                <img src='images/banner-urunler.jpg' style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <div className="container">
                <div className="row">
                    {category.map((e) => (
                        <div className="col-md-12">
                            <Link rel="canonical" to={`/urunler/${e.slug}`}>
                                <div className='urunler-item'>
                                    <p className='urunler-item-name' style={{ fontWeight: "bold" }}>
                                        {e.name}
                                    </p>
                                    <Sagok />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>

    )
}
