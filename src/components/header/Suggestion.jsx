import React from 'react'
import { Link } from 'react-router-dom';

export const Suggestion = ({ products }) => {

    const list = (products && products.map((product) => (
        <li key={product.name} className="suggestions__item">

            <div className="suggestions__item-info">
                <Link className="suggestions__item-name" to={`/urunler/urun/${product.slug}`}>
                    {product.name}
                </Link>
            </div>
        </li>
    )));
    return (
        <div className="suggestions suggestions--location--indicator">
            <ul className="suggestions__list">
                {list}
            </ul>
        </div>
    )
}
