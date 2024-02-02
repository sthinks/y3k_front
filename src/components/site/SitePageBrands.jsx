// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';
import PageHeader from '../shared/PageHeader';
import axiosClient from '../utils/axios';

const breadcrumb = [
    { title: 'Anasayfa', url: "" },
    { title: 'Markalarımız', url: "" },
];

class SitePageBrands extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        axiosClient.get('/api/brands')
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
                    <title>{`Markalarımız — ${theme.name}`}</title>
                </Helmet>

                <PageHeader breadcrumb={breadcrumb} header="Markalarımız" />

                <div className="about-us__image" style={{ backgroundImage: `url("images/markalarimiz.png")` }} />

                <div className="container mt-3">
                    <div className="row">
                        <div className='col-12'>
                        </div>

                        {this.state.data.map((brand) => (

                            <div key={brand.name} className="col-lg-3 col-md-3 col-sm-12">
                                <Link rel="canonical" to={`/markalarimiz/${brand.slug}`}>
                                    <div className="card-st mt-2">
                                        <div style={{
                                            width: "100%",
                                            height: "155px",
                                            position: "relative",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <img src={brand.image} alt={brand.name} style={{
                                                display: "block",
                                            }}></img>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div >
            </div >
        )
    }
}

export default SitePageBrands;
