// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// application
import Departments from './Departments';

import IndicatorSearch from './IndicatorSearch';
import NavLinks from './NavLinks';
import { LogoSmallSvg, } from '../../svg';
import { MeetingRoom, Person, Storefront } from '@material-ui/icons';

function NavPanel(props) {
    const { layout, wishlist } = props;

    let logo = null;
    let departments = null;
    let searchIndicator;

    if (layout === 'compact') {
        logo = (
            <div className="nav-panel__logo">
                <Link to="/"><LogoSmallSvg /></Link>
            </div>
        );

        searchIndicator = <IndicatorSearch />;
    }

    if (layout === 'default') {
        departments = (
            <div className="nav-panel__departments">
                <Departments />
            </div>
        );
    }

    return (
        <div className="nav-panel">
            <div className="nav-panel__container container">
                <div className="nav-panel__row">
                    {logo}
                    {departments}
                    <div className="nav-panel__nav-links nav-links">
                        <NavLinks />
                    </div>
                    <div className="nav-panel__nav-links nav-links" style={{ background: "#3d464d", width: "100%" }}>
                        <ul className='nav-links__list'>
                            <li className='nav-links__item' style={{ margin: "0px 5px" }}>
                                <a href="https://bayi.y3k.com.tr/" target='_blank'>
                                    <Storefront style={{ color: "white", fontSize: "25px" }} />
                                    <span style={{ color: "white", padding: "0px 0px" }}>Bayi Girişi</span>
                                </a>
                            </li>
                            <li className='nav-links__item' >
                                <a href="https://bayi.y3k.com.tr/" target='_blank'>
                                    <Person style={{ color: "white", fontSize: "25px" }} />
                                    <span style={{ color: "white", padding: "0px 0px" }}>Bayilik Başvurusu</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

NavPanel.propTypes = {
    /** one of ['default', 'compact'] (default: 'default') */
    layout: PropTypes.oneOf(['default', 'compact']),
};

NavPanel.defaultProps = {
    layout: 'default',
};

const mapStateToProps = (state) => ({
    wishlist: state.wishlist,
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavPanel);
