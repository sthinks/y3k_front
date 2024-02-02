// react
import React from 'react';

// application
import SocialLinks from '../shared/SocialLinks';

export default function FooterNewsletter() {
    return (
        <div className="site-footer__widget footer-newsletter">
            <div className="footer-newsletter__text footer-newsletter__text--social" style={{ marginTop: "0px" }}>
                <span className='footer-item'>Bizi sosyal medyada takip et!</span>
            </div>
            <SocialLinks className="footer-newsletter__social-links" shape="circle" />
        </div>
    );
}
