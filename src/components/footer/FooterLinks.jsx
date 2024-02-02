// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FooterLinks(props) {
    const { title, items } = props;

    const linksList = items.map((item, index) => (
        <li key={index} className="footer-links__item">
            <a href={item.url} className="footer-links__link">
                {item.title}
            </a>
        </li>
    ));

    return (
        <div className="site-footer__widget footer-links">
            <h5 className="footer-links__title">{title}</h5>
            <ul className="footer-links__list">
                {linksList}
                <li className="footer-links__item">
                    <a href="https://images.bayipro.com/y3k.com.tr/Images/Content/Securitas%20%C4%B0%C5%9F%20Orta%C4%9F%C4%B1%20Davran%C4%B1%C5%9F%20Kurallar%C4%B1%20T%C3%BCz%C3%BC%C4%9F%C3%BC.pdf" target='_blank' className="footer-links__link">
                        İş Ortağı Davranış Kuralları Tüzüğü
                    </a>
                </li>
                <li className="footer-links__item">
                    <a href="https://images.bayipro.com/y3k.com.tr/Images/Content/Securitas%20Etik%20kod.pdf" target='_blank' className="footer-links__link">
                        Etik Kod
                    </a>
                </li>
            </ul>
        </div>
    );
}

FooterLinks.propTypes = {
    /** widget title */
    title: PropTypes.node.isRequired,
    /** array of links */
    items: PropTypes.array,
};

FooterLinks.defaultProps = {
    items: [],
};
