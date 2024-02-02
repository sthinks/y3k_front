// react
import React from 'react';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';

export default function FooterContacts() {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-item">İletişim Bilgileri</h5>

            <div className="footer-contacts__contacts">
                <div className='container'>
                    <div className="row">
                        <div className="col-1" style={{ padding: "0" }}>
                            <i className="footer-contacts__icon fas fa-globe-americas" style={{ marginRight: "4px", color: "white" }} />
                        </div>
                        <div className="col-11" style={{ padding: "0" }}>
                            <a href='https://www.google.com/maps/place/Y3k+G%C3%BCvenlik+Teknolojileri/@41.089874,29.0936714,17z/data=!3m1!4b1!4m5!3m4!1s0x14cacbcaf7b21069:0x62ec09d4edf197e3!8m2!3d41.0898425!4d29.0959068' target="_blank">
                                <span className="footer-item">{theme.contacts.address}</span>
                            </a>
                        </div>
                        <div className="col-1" style={{ padding: "0" }}>
                            <div className='mt-3'>
                                <i className="footer-contacts__icon far fa-envelope" style={{ marginRight: "4px", color: "white" }} />
                            </div>
                        </div>
                        <div className="col-11" style={{ padding: "0" }}>
                            <div className='mt-3'>
                                <a target="_blank" href="mailto:satis@y3k.com.tr">
                                    <span className="footer-item">{theme.contacts.email}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-1" style={{ padding: "0" }}>
                            <div className='mt-3'>
                                <i className="footer-contacts__icon fas fa-mobile-alt" style={{ color: "white" }} />
                            </div>
                        </div>
                        <div className="col-11" style={{ padding: "0" }}>
                            <div className='mt-3'>
                                <a target="_blank" href="tel:+90 216 681 8400">
                                    <span className="footer-item">{`${theme.contacts.phone}`}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
