import React from 'react';
import img1 from '../../assets/images/promotions-01-1170x397.jpg'
import img2 from '../../assets/images/promotions-02-769x366.jpg'
import img3 from '../../assets/images/promotions-03-370x366.jpg'
import img4 from '../../assets/images/promotions-04-370x366.jpg'
import img5 from '../../assets/images/promotions-05-768x366.jpg'

const Promotions = () => {
    return (
        <>
            <section className="section section-sm bg-gray-100">
                <div className="container">
                    <div className="row row-50">
                        <div className="col-lg-12">
                            <article className="banner banner-lg context-dark">
                                <div className="banner-inner">
                                    <div className="banner-image">
                                        <img src={img1} alt="" width="1170" height="397" />
                                    </div>
                                    <div className="banner-body">
                                        <div className="banner-content">
                                            <h2 className="banner-title">
                                                <a href="#"> $100 bonus for new customers only</a>
                                            </h2>
                                            <a className="button button-gray-outline" href="#"> Sign up today</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-8">
                            <article className="banner context-dark">
                                <div className="banner-inner">
                                    <div className="banner-image">
                                        <img src={img2} alt="" width="769" height="366" />
                                    </div>
                                    <div className="banner-body">
                                        <div className="banner-content">
                                            <h3 className="banner-title">
                                                <a href="#"> WIN MORE WITH THE s-bet EXCHANGE</a>
                                            </h3>
                                            <p className="banner-text banner-text-with-quote">Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et</p>
                                            <a className="button button-gray-outline" href="#"> more info</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4">
                            <article className="banner context-dark">
                                <div className="banner-inner">
                                    <div className="banner-image">
                                        <img src={img3} alt="" width="370" height="366" />
                                    </div>
                                    <div className="banner-body">
                                        <div className="banner-content">
                                            <h4 className="banner-title">
                                                <a href="#"> profitable Betting</a>
                                            </h4>
                                            <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mini</p>
                                            <a className="button button-gray-outline" href="#"> more info</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4">
                            <article className="banner context-dark">
                                <div className="banner-inner">
                                    <div className="banner-image">
                                        <img src={img4} alt="" width="370" height="366" />
                                    </div>
                                    <div className="banner-body">
                                        <div className="banner-content">
                                            <h4 className="banner-title">
                                                <a href="#"> Best offers for new customers</a>
                                            </h4>
                                            <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            <a className="button button-gray-outline" href="#"> more info</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-8">
                            <article className="banner context-dark">
                                <div className="banner-inner">
                                    <div className="banner-image">
                                        <img src={img5} alt="" width="768" height="366" />
                                    </div>
                                    <div className="banner-body">
                                        <div className="banner-content banner-content-lg">
                                            <h3 className="banner-title">
                                                <a href="#"> risk-free rate of up to $10 for your first bet</a>
                                            </h3>
                                            <p className="banner-text banner-text-with-quote">Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et</p>
                                            <a className="button button-gray-outline" href="#"> more info</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promotions;