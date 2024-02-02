// react
import React from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// data stubs
import theme from '../../data/theme';

export default function Footer() {
    const informationLinks = [
        { title: 'Hakkımızda', url: '/hakkimizda' },
        { title: 'Markalarımız', url: '/markalarimiz' },
        { title: 'İnsan Kaynakları', url: '/insan-kaynaklari' },
        { title: 'Bize Ulaşın', url: '/iletisim' },
    ];

    const accountLinks = [
        { title: 'Bilgi Güvenliği', url: '/bilgi-guvenligi' },
        { title: 'KVKK', url: '/kvkk' },
        { title: 'Çerez Politikası', url: '/cerez-politikasi' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-12 col-md-3 col-lg-4">
                            <div className="site-footer__widget footer-links" style={{ padding: "0px 50px" }}>
                                <ul className="footer-links__list">
                                    <li className="footer-links__item">
                                        <a rel="canonical" href="/kurumsal/bilgi-guvenliği" className="footer-item">
                                            Bilgi Güvenliği
                                        </a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a rel="canonical" href="/kurumsal/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi" className="footer-item">
                                            Kişisel Verilerin Korunması ve İşlenmesi Politikası
                                        </a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a rel="canonical" href="/kurumsal/veri-sahibi-basvuru-formu" className="footer-item">
                                            Veri Sahibi Başvuru Formu
                                        </a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a rel="canonical" href="/kurumsal/bilgi-toplumu-hizmetleri" className="footer-item">
                                            Bilgi Toplumu Hizmetleri
                                        </a>
                                    </li>
                                    <li className="footer-item">
                                        <a rel="canonical" href="/kurumsal/etik-kod" className="footer-item">
                                            Etik Kod
                                        </a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a rel="canonical" href="/kurumsal/cerez-politikasi" className="footer-item">
                                            Çerez Politikası
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        <p className="footer-item">
                            ©Telif Hakkı 2022 Y3K Güvenlik Teknolojileri A.Ş. Tüm Hakları Saklıdır. Designed by <a target="_blank" href="https://www.socialthinks.com/tr" style={{ textDecoration: "none", cursor: "pointer", color: "white" }}>Socialthinks</a>
                        </p>
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
}
