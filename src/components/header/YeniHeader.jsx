import React from 'react'
import { HeaderCategoryList } from './HeaderCategoryList'
import Search from './Search'
import './YeniHeader.css'

const YeniHeader = () => {

    return (
        <>
            <div className="pattern -large"></div>
            <header className="header js-header">
                <div className="header__outer">
                    <div className="header__top">
                        <div className="header__inner">
                            <div className="col-md-8">
                                <button id="button__mobile" className="button__mobile js-toggle-mobile-menu">
                                    <div className="button__mobile--burger">
                                        <div className="button__mobile--line"></div>
                                    </div>
                                </button>
                                <a href="/">
                                    <img className="securitas-yeni-logo" src="/images/logo.png" width="60" />
                                </a>
                            </div>
                            <div className="col-md-4 d-flex justify-content-end">
                                <div className="header__logo">
                                    <a href="https://www.securitas.com" target="_blank">
                                        <img src="/images/securitas_ab_logo_alt.svg" alt="Kapsamlı Güvenlik İhtiyaçlarına Tek Çözüm" title="Farklı bir dünya görün" width="55"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__separator"></div>
                    <div className="header__bottom">
                        <nav className="header__nav--primary">
                            <div className="link__container">
                                <ul id="nav-list" style={{ alignItems: "center" }} className="link__list">
                                    <li className="nav-item nav-item-custom mr-2">
                                        <a className="nav-link" href="/urunler" role="button" aria-expanded="false">
                                            Ürünler
                                        </a>
                                    </li>
                                    <li className="nav-item nav-item-custom mr-2">
                                        <a className="nav-link" href="/markalarimiz" aria-expanded="false">
                                            Markalarımız
                                        </a>
                                    </li>
                                    <li className="nav-item nav-item-custom">
                                        <a className="nav-link" href="/hakkimizda" aria-expanded="false">
                                            Hakkımızda
                                        </a>
                                    </li>
                                    <li className="nav-item nav-item-custom">
                                        <a className="nav-link" href="/insan-kaynaklari" aria-expanded="false">
                                            İnsan Kaynakları
                                        </a>
                                    </li>
                                    <li className="nav-item nav-item-custom">
                                        <a className="nav-link" href="/iletisim" aria-expanded="false">
                                            İletişim
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                        <nav className="header__nav--primary">
                            <div className="site-header__search" style={{ marginRight: "20px", width: "350px" }}>
                                <Search context="header" />
                            </div>
                            <div className="link__container">
                                <ul id="nav-list" style={{ alignItems: "center" }} className="link__list">
                                    <li className="nav-item nav-item-custom">
                                        <a className="nav-link" href="/bayilik-basvurusu" style={{ marginRight: "0px" }}>
                                            Bayilik Başvurusu
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </header >
            <div className="karart"></div>
            <div className="header-background"></div>

        </>
    )
}

export default YeniHeader
