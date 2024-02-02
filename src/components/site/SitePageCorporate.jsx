// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';
import PageHeader from "../shared/PageHeader";
import axiosClient from '../utils/axios';



class SitePageCorporate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true,
        };

    }
    componentDidMount() {
        const slug = this.props.match.params.slug;

        axiosClient.get(`/api/page/${slug}`).then((res) => {
            const data = res.data;
            this.setState({ data });
        });
    }


    render() {
        const breadcrumb = [
            { title: 'Anasayfa', url: '/' },
            { title: this.state.data.title, url: '' },
        ];
        return (
            <div className="block about-us">
                <Helmet>
                    <title>{`${this.state.data.title} — ${theme.name}`}</title>
                </Helmet>

                <PageHeader breadcrumb={breadcrumb} header={this.state.data.title} />


                <div>
                    <img src={this.state.data.cover_photo} style={{ width: "100%", display: "block", height: "auto" }} />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 mt-5">
                            <div style={{ borderLeft: "1px solid #d7d8d6", paddingLeft: "0.75rem" }}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.state.data.body }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SitePageCorporate;
