// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// data stubs
import theme from '../../data/theme';

function SocialLinksProducts(props) {
    const { shape, className } = props;

    const classes = classNames(className, 'social-links', {
        'social-links--shape--circle': shape === 'circle',
        'social-links--shape--rounded': shape === 'rounded',
    });

    const items = [

        { type: 'linkedin', url: `https://www.linkedin.com/company/y3k-security-technologies-inc./?originalSubdomain=tr`, icon: 'fab fa-linkedin-in' },
        { type: 'twitter', url: `https://twitter.com/y3k_turkey`, icon: 'fab fa-twitter' },
        { type: 'whatsapp', url: `https://web.whatsapp.com/`, icon: 'fab fa-whatsapp' },
        { type: 'facebook', url: `https://www.facebook.com/Y3KTurkiye/`, icon: 'fab fa-facebook-f' },

    ].map((item) => (
        <li key={item.type} className="social-links__item">
            <a
                className={`social-links__link social-links__link--type--${item.type}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={item.icon} />
            </a>
        </li>
    ));

    return (
        <div className={classes}>
            <ul className="social-links__list">
                {items}
            </ul>
        </div>
    );
}

SocialLinksProducts.propTypes = {
    /**
     * rating value
     */
    shape: PropTypes.oneOf(['circle', 'rounded']),
    className: PropTypes.string,
};
SocialLinksProducts.defaultProps = {
    shape: null,
};

export default SocialLinksProducts;
