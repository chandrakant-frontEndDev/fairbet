import React from 'react';
import HeroBanner from '../../authentication/HeroBanner';
import gallary_image_1 from '../../assets/images/gallery-image-1-370x340.jpg'
import gallary_image_2 from '../../assets/images/gallery-image-2-370x340.jpg'
import gallary_image_3 from '../../assets/images/gallery-image-3-370x340.jpg'
import gallary_image_4 from '../../assets/images/gallery-image-4-370x340.jpg'
import gallary_image_5 from '../../assets/images/gallery-image-5-370x340.jpg'
import gallary_image_6 from '../../assets/images/gallery-image-6-370x340.jpg'
const Gallary = () => {
    return(
        <>
        <HeroBanner auth="GALLERY" />

        <section className="section section-variant-1 bg-gray-100 text-center">
        <div className="container">
          <div className="row row-30" data-lightgallery="group">
            <div className="col-xs-8 col-sm-6 col-lg-4">
           
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_1} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #1</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xs-8 col-sm-6 col-lg-4">
            
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_2} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #2</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xs-8 col-sm-6 col-lg-4">
             
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_3} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #3</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xs-8 col-sm-6 col-lg-4">
            
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_4} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #4</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xs-8 col-sm-6 col-lg-4">
             
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_5} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #5</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xs-8 col-sm-6 col-lg-4">
            
              <article className="thumbnail-classic"><a className="thumbnail-classic-figure" href="#" data-lightgallery="item">
                <img src={gallary_image_6} alt="" width="370" height="340"/></a>
                <div className="thumbnail-classic-caption">
                  <div className="thumbnail-classic-panel-right"><span className="thumbnail-classic-panel-toggle mdi mdi-share-variant"></span>
                    <ul className="thumbnail-classic-list list-inline list-inline-xs">
                      <li><a className="fa fa-facebook" href="#"></a></li>
                      <li><a className="fa fa-twitter" href="#"></a></li>
                      <li><a className="fa fa-instagram" href="#"></a></li>
                      <li><a className="fa fa-pinterest-p" href="#"></a></li>
                    </ul>
                  </div>
                  <div className="thumbnail-classic-panel-left">
                    <h6 className="thumbnail-classic-title">Photo #6</h6><span className="thumbnail-classic-subtitle">Share Photo</span>
                  </div>
                </div>
              </article>
            </div>
          </div><a className="button button-lg button-primary" href="#">load more photos</a>
        </div>
      </section>
        </>
    )
}



export default Gallary;