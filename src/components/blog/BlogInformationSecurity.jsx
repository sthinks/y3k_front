// react
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';
import axiosClient from '../utils/axios';

class BlogInformationSecurity extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        axiosClient.get('/api/page/hakkimizda')
            .then((response) => {
                const data = response.data;
                this.setState({ data });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ loading: false })
            });
    }

    render() {
        return (
            <div className="block about-us">
                <Helmet>
                    <title>{`Bilgi Güvenliği — ${theme.name}`}</title>
                </Helmet>

                <div className="about-us__image" style={{
                    backgroundImage: `url(${this.state.data.cover_photo})`, backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="about-us__body">
                                <h1 className='text-center'>Bilgi Güvenliği</h1>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.state.data.body }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BlogInformationSecurity;
