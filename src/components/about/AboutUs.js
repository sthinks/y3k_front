import React from 'react';
import { Sagok } from '../../svg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="video-cta-area section-space--inner--120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                                <h2>Hakkımızda</h2>
                                <h3 className="video-cta-content__small-title">Bizi Yakından Tanıyın</h3>
                                <p className="video-cta-content__text">Sektördeki kaliteli ve güvenilir ürün ihtiyacını karşılamak için çalışıyoruz. Kurulduğumuz 2005 yılından bu yana ürün gamımıza kattığımız her bir markayı titizlikle seçiyor ve her yıl sektörün ihtiyaçları doğrultusunda portföyümüze yeni markalar kazandırıyoruz. İş ortaklarımızı rakiplerinden ayrıştırabilecek, Türkiye’nin en güçlü ürün ve çözüm portföyünü sunmak için var gücümüzle çalışıyoruz.</p>
                                <div className='d-flex align-items-center'>
                                    <Sagok style={{ marginRight: "5px" }} />
                                    <div>
                                        <a className='link-item' href='/iletisim' style={{ fontWeight: "bold", textDecoration: "none", cursor: "pointer" }}>Hemen İletişime Geç</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6 margin-top-mobile">
                            <div className="cta-video-image">
                                <div className="video-popup">
                                    <div className="cta-video-image__image">
                                        <img src='/images/homepage-about.jpg' className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;