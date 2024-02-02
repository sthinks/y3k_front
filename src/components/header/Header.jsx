// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

// application
import NavPanel from './NavPanel';
import Search from './Search';

function Header(props) {
    const { layout } = props;
    let bannerSection;

    if (layout === 'default') {
        bannerSection = (
            <div className="site-header__middle container">
                <div className="site-header__logo">
                    <Link to="/"><img src="images/logos/logo.png"></img></Link>
                </div>
                <div className="site-header__search">
                    <Search context="header" />
                </div>
                <div className="site-header__logo">
                    <a target='_blank' href="https://www.securitas.com/"><img src="images/logos/securitas.png" height={60} width="100"></img></a>
                </div>
            </div>
        );
    }

    return (
        <div className="site-header">
            {bannerSection}
            <div className="site-header__nav-panel">
                <NavPanel layout={layout} />
            </div>
        </div>
    );
}

Header.propTypes = {
    /** one of ['default', 'compact'] (default: 'default') */
    layout: PropTypes.oneOf(['default', 'compact']),
};

Header.defaultProps = {
    layout: 'default',
};

export default Header;
