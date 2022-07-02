import React from 'react';
import {NavLink} from 'react-router-dom'
import HeroBanner from '../../authentication/HeroBanner'
const Page404 = () => {
    return(
        <>
      <HeroBanner auth="404 page" />

      <section className="section section-variant-1 bg-gray-100 text-center">
        <div className="container">
          <div className="row row-30 justify-content-center">
            <div className="col-xl-10"><span className="icon-xl icon-gray-400 mdi mdi-emoticon-sad"></span>
              <h2><span className="" style={{color:"#64b000"}}>Oops!</span> Page Not found</h2>
              <p className="big text-gray-800">You may have mistyped the address or the page may have moved.</p>
              <NavLink className="button button-lg button-primary" to="/">Go to home page</NavLink>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}


export default Page404;