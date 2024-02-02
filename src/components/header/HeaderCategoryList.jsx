import React, { useEffect, useState } from 'react'
import axiosClient from '../utils/axios';

export const HeaderCategoryList = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        axiosClient
            .get(`/api/categories`)
            .then(function (response) {
                setList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    return (
        <div className="dropdown-menu menu-custom-lg" aria-labelledby="navbarDropdownMenuLink">
            {list.map((e) => (
                <a key={e.name} className="dropdown-item" href={`/urunler/${e.slug}`}>{e.name}</a>
            ))}
        </div>
    )
}
