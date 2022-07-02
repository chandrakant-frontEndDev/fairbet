import React from 'react';
import { Link } from 'react-router-dom';
import AllSports from './sportTabs/AllSports';
import OpenBets from './sportTabs/OpenBets';
import SideBar from './sportTabs/SideBar';
import TabNav from './sportTabs/TabNav';



const Tabs = () => {
    return (
        <>
            <section className="section section-sm bg-gray-100 ">
                <div className='container-fluid'>
                <div className='row'>
                    <SideBar />
                    <div className='col-md-9 '>
                        {/* <!-- Isotope Filters--> */}
                        <TabNav />
                        <div className="all_tabs">
                            <div data-isotope-layout="masonry" data-column-classname=".col-1" data-isotope-group="gallery">
                                <div className=" isotope-item isotope-sizer" ></div>
                                <AllSports />
                            </div>
                        </div>
                    </div>
                    {/* <OpenBets /> */}
                </div>
                </div>
            </section>
        </>
    )
}

export default Tabs