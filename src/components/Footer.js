import React from 'react'
import logo1 from "../assets/images/logo-default-213x82.png";
import logo2 from "../assets/images/logo-inverse-213x82.png";
import footerSoccer from "../assets/images/footer-soccer-post-1-93x87.jpg";
import footerSoccerPost from "../assets/images/footer-soccer-post-2-93x87.jpg";
import footerSoccerPost1 from "../assets/images/footer-soccer-post-3-93x87.jpg";
import footerSoccerPost2 from "../assets/images/footer-soccer-post-4-93x87.jpg";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="section footer-classic footer-classic-dark">
                <div className="footer-classic-main">
                    <div className="container">
                        <p className="heading-7">Subscribe to our Newsletter</p>
                        {/* <!-- RD Mailform--> */}
                        <form className="rd-mailform rd-form rd-inline-form-creative" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php" noValidate="novalidate">
                            <div className="form-wrap">
                                <div className="form-input-wrap">
                                    <input className="form-input form-control-has-validation" id="footer-form-email" type="email" name="email" placeholder='Enter your E-mail'  data-constraints="@Required" /><span className="form-validation"></span>
                                        {/* <label className="form-label rd-input-label" htmlFor="footer-form-email"></label> */}
                                </div>
                            </div>
                            <div className="form-button">
                                <button className="button button-primary-outline" type="submit" aria-label="Send"><span className="icon fl-budicons-launch-right164"></span></button>
                            </div>
                        </form>
                        <div className="row row-50">
                            <div className="col-lg-5 text-center text-sm-left">
                                <div className="unit-spacing-xl">
                                    <article className="unit unit-sm-horizontal justify-content-center justify-content-sm-start footer-classic-info">
                                        <div className="unit-left">
                                            {/* <!-- Brand--> */}
                                            <a className="brand" href="index.html"><img className="brand-logo-dark" src={logo1} alt="" width="106" height="41" /><img className="brand-logo-light" src={logo2} alt="" width="106" height="41" /></a>
                                            </div>
                                                <div className="unit-body">
                                                    <p>Fair-Bet offers you all the best online betting from every corner of the planet with thousands of online betting markets.</p>
                                                </div>
                                            </article>
                                        </div>
                                        <ul className="list-inline list-inline-bordered list-inline-bordered-lg">
                                            <li>
                                                <div className="unit unit-horizontal unit-middle">
                                                    <div className="unit-left">
                                                        <svg className="svg-color-primary svg-sizing-35" x="0px" y="0px" width="27px" height="27px" viewBox="0 0 27 27" preserveAspectRatio="none">
                                                            <path d="M2,26c0,0.553,0.447,1,1,1h5c0.553,0,1-0.447,1-1v-8.185c-0.373-0.132-0.711-0.335-1-0.595V19 H6v-1v-1v-1H5v1v2H3v-9H2v1H1V9V8c0-0.552,0.449-1,1-1h1h1h3h0.184c0.078-0.218,0.173-0.426,0.297-0.617C8.397,5.751,9,4.696,9,3.5 C9,1.567,7.434,0,5.5,0S2,1.567,2,3.5C2,4.48,2.406,5.364,3.056,6H3H2C0.895,6,0,6.895,0,8v7c0,1.104,0.895,2,2,2V26z M8,26H6v-6h2 V26z M5,26H3v-6h2V26z M3,3.5C3,2.121,4.121,1,5.5,1S8,2.121,8,3.5S6.879,6,5.5,6S3,4.879,3,3.5 M1,15v-3h1v4 C1.449,16,1,15.552,1,15"></path>
                                                            <path d="M11.056,6H11h-1C8.895,6,8,6.895,8,8v7c0,1.104,0.895,2,2,2v9c0,0.553,0.447,1,1,1h5 c0.553,0,1-0.447,1-1v-9c1.104,0,2-0.896,2-2V8c0-1.105-0.896-2-2-2h-1h-0.056C16.594,5.364,17,4.48,17,3.5 C17,1.567,15.434,0,13.5,0S10,1.567,10,3.5C10,4.48,10.406,5.364,11.056,6 M10,15v1c-0.551,0-1-0.448-1-1v-3h1V15z M11,20h2v6h-2 V20z M16,26h-2v-6h2V26z M17,16v-1v-3h1v3C18,15.552,17.551,16,17,16 M17,7c0.551,0,1,0.448,1,1v1v1v1h-1v-1h-1v5v4h-2v-1v-1v-1h-1 v1v1v1h-2v-4v-5h-1v1H9v-1V9V8c0-0.552,0.449-1,1-1h1h1h3h1H17z M13.5,1C14.879,1,16,2.121,16,3.5C16,4.879,14.879,6,13.5,6 S11,4.879,11,3.5C11,2.121,12.121,1,13.5,1"> </path>
                                                            <polygon points="15,13 14,13 14,9 13,9 12,9 12,10 13,10 13,13 12,13 12,14 13,14 14,14 15,14 	"></polygon>
                                                            <polygon points="7,14 7,13 5,13 5,12 6,12 7,12 7,10 7,9 6,9 4,9 4,10 6,10 6,11 5,11 4,11 4,12 4,13 4,14 5,14"></polygon>
                                                            <polygon points="20,10 22,10 22,11 21,11 21,12 22,12 22,13 20,13 20,14 22,14 23,14 23,13 23,12 23,11 23,10 23,9 22,9 20,9 	"></polygon>
                                                            <path d="M19.519,6.383C19.643,6.574,19.738,6.782,19.816,7H20h3h1h1c0.551,0,1,0.448,1,1v3h-1v-1h-1v9 h-2v-2v-1h-1v1v2h-2v-1.78c-0.289,0.26-0.627,0.463-1,0.595V26c0,0.553,0.447,1,1,1h5c0.553,0,1-0.447,1-1v-9c1.104,0,2-0.896,2-2 V8c0-1.105-0.896-2-2-2h-1h-0.056C24.594,5.364,25,4.48,25,3.5C25,1.567,23.434,0,21.5,0S18,1.567,18,3.5 c0,0.736,0.229,1.418,0.617,1.981C18.861,5.834,19.166,6.14,19.519,6.383 M19,20h2v6h-2V20z M24,26h-2v-6h2V26z M26,15 c0,0.552-0.449,1-1,1v-4h1V15z M21.5,1C22.879,1,24,2.121,24,3.5C24,4.879,22.879,6,21.5,6C20.121,6,19,4.879,19,3.5 C19,2.121,20.121,1,21.5,1"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="unit-body">
                                                        <p className="heading-7 opacity-2">Join Our Team</p><a className="link" href="mailto:#">fairbet@gmail.com</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="unit unit-horizontal unit-middle">
                                                    <div className="unit-left">
                                                        <svg className="svg-color-primary svg-sizing-35" x="0px" y="0px" width="72px" height="72px" viewBox="0 0 72 72">
                                                            <path d="M36.002,0c-0.41,0-0.701,0.184-0.931,0.332c-0.23,0.149-0.4,0.303-0.4,0.303l-9.251,8.18H11.58 c-1.236,0-1.99,0.702-2.318,1.358c-0.329,0.658-0.326,1.3-0.326,1.3v11.928l-8.962,7.936V66c0,0.015-0.038,1.479,0.694,2.972 C1.402,70.471,3.006,72,5.973,72h30.03h30.022c2.967,0,4.571-1.53,5.306-3.028c0.736-1.499,0.702-2.985,0.702-2.985V31.338 l-8.964-7.936V11.475c0,0,0.004-0.643-0.324-1.3c-0.329-0.658-1.092-1.358-2.328-1.358H46.575l-9.251-8.18 c0,0-0.161-0.154-0.391-0.303C36.703,0.184,36.412,0,36.002,0z M36.002,3.325c0.49,0,0.665,0.184,0.665,0.184l6,5.306h-6.665 h-6.665l6-5.306C35.337,3.51,35.512,3.325,36.002,3.325z M12.081,11.977h23.92H59.92v9.754v2.121v14.816L48.511,48.762 l-10.078-8.911c0,0-0.307-0.279-0.747-0.548s-1.022-0.562-1.684-0.562c-0.662,0-1.245,0.292-1.686,0.562 c-0.439,0.268-0.747,0.548-0.747,0.548l-10.078,8.911L12.082,38.668V23.852v-2.121v-9.754H12.081z M8.934,26.867v9.015 l-5.091-4.507L8.934,26.867z M63.068,26.867l5.091,4.509l-5.091,4.507V26.867z M69.031,34.44v31.559 c0,0.328-0.103,0.52-0.162,0.771L50.685,50.684L69.031,34.44z M2.971,34.448l18.348,16.235L3.133,66.77 c-0.059-0.251-0.162-0.439-0.162-0.769C2.971,66.001,2.971,34.448,2.971,34.448z M36.002,41.956c0.264,0,0.437,0.057,0.546,0.104 c0.108,0.047,0.119,0.059,0.119,0.059l30.147,26.675c-0.3,0.054-0.79,0.207-0.79,0.207H36.002H5.98H5.972 c-0.003,0-0.488-0.154-0.784-0.207l30.149-26.675c0,0,0.002-0.011,0.109-0.059C35.555,42.013,35.738,41.956,36.002,41.956z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="unit-body">
                                                        <p className="heading-7 opacity-2">Contact Us</p><a className="link" href="mailto:#">fairbet@gmail.com</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="group-md group-middle">
                                            <div className="group-item">
                                                <ul className="list-inline list-inline-xs">
                                                    <li><a className="icon icon-corporate fa fa-facebook" href="#"></a></li>
                                                    <li><a className="icon icon-corporate fa fa-twitter" href="#"></a></li>
                                                    <li><a className="icon icon-corporate fa fa-google-plus" href="#"></a></li>
                                                    <li><a className="icon icon-corporate fa fa-instagram" href="#"></a></li>
                                                </ul>
                                            </div><Link className="button button-sm button-gray-outline" to="/contact-us">Get in Touch</Link>
                                        </div>
                                </div>
                                <div className="col-lg-7">
                                    <h5>Popular News</h5>
                                    <div className="divider-small divider-primary"></div>
                                    <div className="row row-20">
                                        <div className="col-sm-6">
                                            {/* <!-- Post Classic--> */}
                                            <article className="post-classic">
                                                <div className="post-classic-aside"><a className="post-classic-figure" href="blog-post.html"><img src={footerSoccer} alt="" width="93" height="87" /></a></div>
                                                <div className="post-classic-main">
                                                    {/* <!-- Badge--> */}
                                                    <div className="badge badge-secondary">Tennis
                                                    </div>
                                                    <p className="post-classic-title"><a href="blog-post.html">Next gen stars making a surge in the new season</a></p>
                                                    <div className="post-classic-time"><span className="icon mdi mdi-clock"></span>
                                                        <time dateTime="2020">April 15, 2020</time>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-sm-6">
                                            {/* <!-- Post Classic--> */}
                                            <article className="post-classic">
                                                <div className="post-classic-aside"><a className="post-classic-figure" href="blog-post.html"><img src={footerSoccerPost} alt="" width="93" height="87" /></a></div>
                                                <div className="post-classic-main">
                                                    {/* Badge */}
                                                    <div className="badge badge-secondary">Basketball
                                                    </div>
                                                    <p className="post-classic-title"><a href="blog-post.html">Raptors GM excited about Monroe signing</a></p>
                                                    <div className="post-classic-time"><span className="icon mdi mdi-clock"></span>
                                                        <time dateTime="2020">April 15, 2020</time>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-sm-6">
                                            {/* Post Classic */}
                                            <article className="post-classic">
                                                <div className="post-classic-aside"><a className="post-classic-figure" href="blog-post.html"><img src={footerSoccerPost1} alt="" width="93" height="87" /></a></div>
                                                <div className="post-classic-main">
                                                     {/* Badge */}
                                                    <div className="badge badge-secondary">Football
                                                    </div>
                                                    <p className="post-classic-title"><a href="blog-post.html">Prem in 90 seconds: Chelsea's crisis is over!</a></p>
                                                    <div className="post-classic-time"><span className="icon mdi mdi-clock"></span>
                                                        <time dateTime="2020">April 15, 2020</time>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-sm-6">
                                            {/* Post Classic  */}
                                            <article className="post-classic">
                                                <div className="post-classic-aside"><a className="post-classic-figure" href="blog-post.html"><img src={footerSoccerPost2} alt="" width="93" height="87" /></a></div>
                                                <div className="post-classic-main">
                                                     {/* Badge */}
                                                    <div className="badge badge-secondary">Baseball
                                                    </div>
                                                    <p className="post-classic-title"><a href="blog-post.html">Lester regains form with 6 scoreless, 8 K’s</a></p>
                                                    <div className="post-classic-time"><span className="icon mdi mdi-clock"></span>
                                                        <time dateTime="2020">April 15, 2020</time>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-classic-aside footer-classic-darken">
                        <div className="container">
                            <div className="layout-justify">
                                {/* Rights */}
                                <p className="rights"><span>Fair-Bet</span><span>&nbsp;©&nbsp;</span><span className="copyright-year">2022</span><span>.&nbsp;</span><a className="link-underline" href="privacy-policy.html">Privacy Policy</a></p>
                                <nav className="nav-minimal">
                                    <ul className="nav-minimal-list">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        {/* <li><a href="#">Pages</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer