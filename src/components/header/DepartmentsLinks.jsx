// react
import React, { useEffect, useState } from 'react';

// application
import Megamenu from './Megamenu';
import Menu from './Menu';
import { ArrowRoundedRight6x9Svg } from '../../svg';

// data stubs

import axiosClient from '../utils/axios';

function DepartmentsLinks() {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        axiosClient.get('/api/categories')
            .then(function (response) {
                const products = response.data;
                setTitle(products)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    const linksList = title.map((department, index) => {
        let arrow = null;
        let submenu = null;
        let itemClass = '';


        if (!department.name) {
            arrow = <ArrowRoundedRight6x9Svg className="departments__link-arrow" />;
        }

        if (department.children && department.children.length < 0) {
            itemClass = 'departments__item--menu';
            submenu = (
                <div className="departments__menu">
                    <Menu items={department.children} />
                </div>
            );
        }

        if (department.submenu && department.submenu.type === 'megamenu') {
            submenu = (
                <div className={`departments__megamenu departments__megamenu--${department.submenu.menu.size}`}>
                    <Megamenu menu={department.submenu.menu} location="department" />
                </div>
            );
        }

        return (
            <li key={index} className={`departments__item ${itemClass}`}>
                <a href={`/urunler/${department.slug}`}>
                    {department.name}
                    {arrow}
                </a>
                {submenu}
            </li>
        );
    });

    return (
        <ul className="departments__links">
            {linksList}
        </ul>
    );
}

export default DepartmentsLinks;
