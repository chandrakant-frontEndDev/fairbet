import React, { useState } from 'react';
import logo1 from "../assets/images/logo-default-213x82.png";
import logo2 from "../assets/images/logo-inverse-213x82.png";
import { Link } from 'react-router-dom';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handelToggle = () => {
        setToggle(!toggle)
    }
    let access = sessionStorage.getItem("access");
    return (
        <>
            <header className="section page-header rd-navbar-dark">
                {/* RD Navbar */}
                <div className="rd-navbar-wrap" style={{ height: "151.969px" }}>
                    <nav className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="166px" data-xl-stick-up-offset="166px" data-xxl-stick-up-offset="166px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                        <div className="rd-navbar-panel">
                            {/* RD Navbar Toggle */}

                            <button className={`${toggle === true ? "rd-navbar-toggle active" : "rd-navbar-toggle toggle-original"}`} data-rd-navbar-toggle=".rd-navbar-main" onClick={handelToggle}><span></span></button>
                            {/* RD Navbar Panel */}
                        </div>
                        <div className={`${toggle === true ? 'rd-navbar-main toggle-original-elements active' : 'rd-navbar-main toggle-original-elements'}`}>
                            <div className="rd-navbar-main-top">
                                <div className="rd-navbar-main-container container-fluid">
                                    {/* RD Navbar Brand */}
                                    <div className="rd-navbar-brand">
                                        {/* Brand  */}
                                        <Link className="brand" to="/"><img className="brand-logo-dark" src={logo1} alt="" width="106" height="41" /><img className="brand-logo-light" src={logo2} alt="" width="106" height="41" /></Link>
                                    </div>
                                    {/* RD Navbar Search */}
                                    <div className="rd-navbar-search toggle-original-elements">
                                        <button className="rd-navbar-search-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-search"><span></span></button>
                                        <form className="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                                            <div className="form-wrap">
                                                {/* <label className="form-label rd-input-label" htmlFor="rd-navbar-search-form-input"></label> */}
                                                <input className="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" placeholder='Enter your search request here...' type="text" name="s" autoComplete="off" />
                                                <div className="rd-search-results-live" id="rd-search-results-live"></div>
                                                <button className="rd-search-form-submit fl-budicons-launch-search81" type="submit"></button>
                                            </div>
                                        </form>
                                        <div className="rd-navbar-collapse">
                                            <ul className="list-inline list-inline-bordered">
                                                {/* <li>
                                                    <div className="select2-container select select-inline select-inline-dark" id="s2id_autogen1">
                                                        <a href="#" className="select2-choice" tabIndex="-1">   <span className="select2-chosen" id="select2-chosen-2">en</span><abbr className="select2-search-choice-close"></abbr>   <span className="select2-arrow" role="presentation"><b role="presentation"></b></span></a>
                                                        <label htmlFor="s2id_autogen2" className="select2-offscreen"></label><input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2" /><div className="select2-drop select2-display-none select-inline-dropdown select-inline-dropdown-secondary">   <div className="select2-search select2-search-hidden select2-offscreen">       <label htmlFor="s2id_autogen2_search" className="select2-offscreen"></label>       <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="" />   </div>   <ul className="select2-results" role="listbox" id="select2-results-2">   </ul></div></div>
                                                    <select className="select select-inline select-inline-dark" data-placeholder="Select an option" data-dropdown-classname="select-inline-dropdown select-inline-dropdown-secondary" tabIndex="-1" title="" style={{ display: "none" }}>
                                                        <option value="en">en</option>
                                                        <option value="fr">fr</option>
                                                        <option value="es">es</option>
                                                    </select>
                                                </li> */}
                                                {
                                                    access ?
                                                        <>
                                                            <li><Link className="badge badge-primary" to="/wallet">Wallet</Link></li>
                                                            <li><Link className="link link-icon link-icon-left link-classic" to="/"><span className="link-icon-text">Profile</span></Link></li>
                                                        </>
                                                        :
                                                        <>
                                                            <li><Link className="badge badge-primary" to="/register">registration</Link></li>
                                                            <li><Link className="link link-icon link-icon-left link-classic" to="/login"><span className="icon fl-bigmug-line-login12"></span><span className="link-icon-text">Log In</span></Link></li>
                                                        </>
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="rd-navbar-main-bottom rd-navbar-darker">
                                <div className="rd-navbar-main-container container">
                                    {/* RD Navbar Nav */}
                                    <ul className="rd-navbar-nav">
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/">Sports</Link>
                                        </li>
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/">In-Play</Link>
                                        </li>
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/promotions">Promotions</Link>
                                        </li>
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/">Statistics</Link>
                                        </li>
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/results">Results</Link>
                                        </li>
                                        <li className="rd-nav-item"><Link className="rd-nav-link" to="/aboutUs">About Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >

        </>
    )
}

export default Header