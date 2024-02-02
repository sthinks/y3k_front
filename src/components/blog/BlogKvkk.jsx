// react
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';
import axiosClient from '../utils/axios';

function BlogKvkk() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosClient.get('/api/page/kvkk')
            .then(function (response) {
                const info = response.data;
                setData(info)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    return (
        <div className="block about-us">
            <Helmet>
                <title>{`KVKK — ${theme.name}`}</title>
            </Helmet>

            <div className="about-us__image" style={{
                backgroundImage: `url(${data.cover_photo})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                            <div
                                dangerouslySetInnerHTML={{ __html: data.body }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogKvkk;
