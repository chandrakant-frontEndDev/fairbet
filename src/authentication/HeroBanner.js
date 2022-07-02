import React from 'react';
import img from "../assets/images/bg-breadcrumbs-1-1920x726.jpg"
const HeroBanner = (props) => {
  return (
    <>
      <section className="section parallax-container breadcrumbs-wrap" data-parallax-img="images/bg-breadcrumbs-1-1920x726.jpg">
        <div className="material-parallax parallax">
          <img src={img} alt="" style={{ display: "block", transform: " translate3d(-50%, 230px, 0px)" }} />
        </div>
        <div className="parallax-content breadcrumbs-custom context-dark">
          <div className="container">
            <h3 className="breadcrumbs-custom-title">{props.auth}</h3>
            <ul className="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li className="active">{props.auth}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}


export default HeroBanner;