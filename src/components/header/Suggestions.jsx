// react
import React from 'react';

// third-party
import classNames from 'classnames';
import { connect } from 'react-redux';

// application

function Suggestions(props) {
    const {
        loading,
        context,
        className,
        products,
    } = props;
    const rootClasses = classNames(`suggestions suggestions--location--${context}`, className);

    const list = (products && products.map((product) => (
        <li key={product.id} className="suggestions__item">
            {product.images && product.images.length > 0 && (
                <div className="suggestions__item-image product-image">
                    <div className="product-image__body">
                        <img className="product-image__img" src={product.cover_image} alt="" />
                    </div>
                </div>
            )}
            <div className="suggestions__item-info">
                <a className="suggestions__item-name" href={`/urunler/urun/${product.slug}`} style={{ textDecoration: "none" }}>
                    {product.name}
                </a>
            </div>
        </li >
    )));

    return (
        <div className={rootClasses}>
            <ul className="suggestions__list list__suggestions__margin" >
                {list}
            </ul>
        </div>
    );
}

const mapStateToProps = () => ({});

export default connect(
    mapStateToProps,
)(Suggestions);
