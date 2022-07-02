import React from 'react';
import slider2 from "../../assets/images/slider-1-slide-2-1920x671.jpg";
import slider1 from "../../assets/images/slider-1-slide-1-1920x671.jpg"

const Banner = () => {
    return (
        <>
            <section className='app_banner'>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} alt="Los Angeles" width="100%" height="500" />
                            <div className='swiper-slide-caption'>
                                <div className="carousel-caption active">
                                    <h1 data-caption-animate="fadeInUp" data-caption-delay="100" className="fadeInUp animated">EASY <br />  BETS</h1>
                                    <h4 data-caption-animate="fadeInUp" data-caption-delay="200" className="fadeInUp animated">With 100% Risk-Free Guarantee</h4>
                                    <a className="button button-gray-outline fadeInUp animated" data-caption-animate="fadeInUp" data-caption-delay="300" href="#">JOIN US</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider2} alt="Chicago" width="100%" height="500" />
                            <div className='swiper-slide-caption'>
                                <div className="carousel-caption">
                                    <h1 data-caption-animate="fadeInUp" data-caption-delay="100" className="fadeInUp animated">Safe <br /> Betting</h1>
                                    <h4 data-caption-animate="fadeInUp" data-caption-delay="200" className="fadeInUp animated">With 100% Risk-Free Guarantee</h4>
                                    <a className="button button-gray-outline fadeInUp animated" data-caption-animate="fadeInUp" data-caption-delay="300" href="#">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Banner