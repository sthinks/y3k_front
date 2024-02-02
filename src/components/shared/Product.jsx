// react
import React, { Component } from 'react';

// third-party
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import { cartAddItem } from '../../store/cart';
import { compareAddItem } from '../../store/compare';
import { wishlistAddItem } from '../../store/wishlist';
import axiosClient from '../utils/axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ContactForm from '../commons/ContactForm';
import './Product.css';
import PageHeader from './PageHeader';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            urunler: [],
            benzerUrunler: [],
            marka: [],
            loading: true,
            open: false,
        };

    }

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });

    handleChangeQuantity = (quantity) => {
        this.setState({ quantity });
    };

    componentDidMount() {
        const slug = this.props.match.params.slug;

        axiosClient.get(`/api/product/${slug}`).then((res) => {
            const urunler = res.data;
            const benzerUrunler = res.data.related_products;
            const marka = res.data.brand;
            const loading = false;
            this.setState({ urunler });
            this.setState({ benzerUrunler, loading });
            this.setState({ marka });
        });
    }

    render() {
        const {
            layout,
        } = this.props;

        const breadcrumb = [
            { title: 'Anasayfa', url: "" },
            { title: 'Ürünler', url: "/urunler/gecis-kontrol-sistemleri" },
            { title: `${this.state.urunler.category?.name}`, url: `/urunler/${this.state.urunler.category?.slug}` },
            { title: `${this.state.urunler.name}`, url: "" },
        ];

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className='col-12'>
                        <PageHeader breadcrumb={breadcrumb} />
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-12">
                        <div style={{
                            boxShadow: "inset 0 0 0 2px #f2f2f2",
                            padding: "8px"
                        }}>
                            <div style={{
                                height: "375px",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <img src={this.state.urunler.cover_photo} style={{ width: "300px", height: "auto" }} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className='d-flex flex-column justify-content-between' style={{ height: "100%" }}>
                            <div className="product__info">
                                <img src={this.state.marka.image} width="100px" height="auto" />
                                <h3 className="product__name">{this.state.urunler.name}</h3>
                                <h6 className="product__name">{this.state.urunler.sku}</h6>
                                <div className="product__description">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: this.state.urunler.brief }}
                                    />
                                </div>
                            </div>
                            <div className="product__footer">
                                <div className="product__tags tags">
                                    <div className="tags__list">
                                        <button className='btn btn-primary btn-lg' style={{ color: 'white' }} onClick={this.handleOpen}>Hemen Teklif Al</button>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className="form-modal">
                                    <ContactForm message={`${this.state.urunler.name} ürünü için teklif almak istiyorum.`} />
                                    <Box
                                        onClick={this.handleClose}
                                        sx={{
                                            position: "absolute",
                                            right: "0px",
                                            top: "0px",
                                            width: "30px",
                                            height: "30px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <img src="/images/close-icon.png" style={{ width: "25px", }} />
                                    </Box>
                                </Box>
                            </Modal>

                        </div>
                    </div>
                </div>
                <div className='product-tabs'>
                    <div className="container" style={{ padding: "0px" }}>
                        <div className='tabs'>
                            <span>GENEL BAKIŞ</span>
                        </div>
                        <div className='tabs-content'>
                            <div
                                className='tabs-content-inner'
                                dangerouslySetInnerHTML={{ __html: this.state.urunler.description }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex align-items-center">
                        <div><h3>Benzer Ürünler</h3></div>
                    </div>
                    <div className="">
                        <div className="row row-cols-1 row-cols-md-4 g-1">
                            {this.state.benzerUrunler.slice(0, 4).map((product) => (
                                <div className="col mb-3">
                                    <a rel="canonical" href={`/urunler/urun/${product.slug}`} className="benzer-urunler" style={{ textDecoration: "none" }}>
                                        <div className="card" style={{ height: "300px" }}>
                                            <div className="p-3">
                                                <div style={{
                                                    background: `url(${product.cover_photo})`,
                                                    height: "190px",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "contain",
                                                    backgroundPosition: "center",
                                                }}>
                                                </div>
                                            </div>
                                            <div className="product-card__name text-center p-3">
                                                <a style={{ color: "#3d464d", textDecoration: "none" }} className="card-title font-weight-bold">{product.name}</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    /** product object */
    /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
    layout: PropTypes.oneOf(['standard', 'sidebar', 'columnar', 'quickview']),
};

Product.defaultProps = {
    layout: 'standard',
};

const mapDispatchToProps = {
    cartAddItem,
    wishlistAddItem,
    compareAddItem,
};

export default connect(
    () => ({}),
    mapDispatchToProps,
)(Product);
