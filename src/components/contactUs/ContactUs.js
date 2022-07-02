import React from 'react';
import img from '../../assets/images/bg-breadcrumbs-1-1920x726.jpg'
const ContactUs = () => {
    return (
        <>
            <section className="section parallax-container breadcrumbs-wrap" data-parallax-img="images/bg-breadcrumbs-1-1920x726.jpg">
                <div className="material-parallax parallax">
                    <img src={img} alt=""  style={{display:"block",transform:"translate3d(-50%, 217px, 0px)" }} />
                </div>
                <div className="parallax-content breadcrumbs-custom context-dark">
                    <div className="container">
                        <h3 className="breadcrumbs-custom-title">Contact us</h3>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Contact us</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-variant-1 bg-gray-100">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-7 col-xl-8">
          
              <article className="heading-component">
                <div className="heading-component-inner">
                  <h5 className="heading-component-title">Get in touch
                  </h5>
                </div>
              </article>

              <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="" noValidate="novalidate">
                <div className="row row-10 row-narrow">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-user-name-1">Your Name</label>
                      <input className="form-input form-control-has-validation form-control-last-child" id="form-user-name-1" type="text" name="name" data-constraints="@Required"/>
                      <span className="form-validation"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-user-phone">Phone</label>
                      <input className="form-input form-control-has-validation form-control-last-child" id="form-user-phone" type="text" name="phone" data-constraints="@Numeric @Required"/>
                      <span className="form-validation"></span>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-message">Message</label>
                      <textarea className="form-input form-control-has-validation form-control-last-child" id="form-message" name="message" data-constraints="@Required"></textarea><span className="form-validation"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-email">E-mail</label>
                      <input className="form-input form-control-has-validation form-control-last-child" id="form-email" type="email" name="email" data-constraints="@Email @Required"/>
                      <span className="form-validation"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button className="button button-lg button-primary button-block" type="submit">Send message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-xl-4">
             
              <article className="heading-component">
                <div className="heading-component-inner">
                  <h5 className="heading-component-title">Contact Details
                  </h5>
                </div>
              </article>

              <div className="contact-list">
                <dl>
                  <dt>E-mail</dt>
                  <dd><span className="icon icon-primary mdi mdi-email-outline"></span><a className="link" href="mailto:#">fairbet@gmail.com</a></dd>
                </dl>
                <dl>
                  <dt>Address</dt>
                  <dd><span className="icon icon-primary mdi mdi-map-marker"></span><a className="link" href="#">71 Pilgrim Avenue Chevy Chase, MD 20815</a></dd>
                </dl>
                <dl>
                  <dt>Phone</dt>
                  <dd><span className="icon icon-primary mdi mdi-phone"></span><a className="link link-md" href="tel:#">+34 91 398 43 00</a></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}


export default ContactUs;