import React, { useState } from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom"

const SideBar = () => {
    const [view, setView] = useState(false)

    return (
        <>
            <div className='col-md-3'>
                <div className="sideBar_wrep">
                    <div className="sports_sideBar">
                        <ul className="sports_sideBar_manu">
                            <div className='sports_sideBar_manu_heading'> 
                                <h5>Sports</h5>
                            </div>
                            <li><Link data-isotope-filter="*" data-isotope-group="gallery" to="/">All</Link></li>
                            <li><Link data-isotope-filter="cricket" data-isotope-group="gallery" to="/cricket">Cricket</Link></li>
                            <li><Link data-isotope-filter="soccer" data-isotope-group="gallery" to="/soccer">Soccer</Link></li>
                            <li><Link data-isotope-filter="tennis" data-isotope-group="gallery" to="/tennis">Tennis</Link></li>
                            <li><Link data-isotope-filter="football" data-isotope-group="gallery" to="/football">Football</Link></li>
                            <li><Link data-isotope-filter="baseball" data-isotope-group="gallery" to="/baseball">Baseball</Link></li>
                            <li><Link data-isotope-filter="volleyball" data-isotope-group="gallery" to="/volleyball">Volleyball</Link></li>
                            <li><Link data-isotope-filter="live-casino" data-isotope-group="gallery" to="/liveCasino">Live Casino</Link></li>
                            <li><Link data-isotope-filter="live-card" data-isotope-group="gallery" to="/liveCard">Live Card</Link></li>
                            <li><Link data-isotope-filter="slot-games" data-isotope-group="gallery" to="/slotGame">Slot Game</Link></li>
                            <div className="moretext" style={view === false ? { display: "none" } : {}}>
                                <li><a href="#">Kabbadi</a></li>
                                <li><a href="#">Basketball</a></li>
                                <li><a href="#">Badmainton</a></li>
                                <li><a href="#">Golf</a></li>
                                <li><a href="#">Counter Strike</a></li>
                                <li><a href="#">Rugby</a></li>
                                <li><a href="#">Boxing</a></li>
                                <li><a href="#">FIFA</a></li>
                                <li><a href="#">Dota 2</a></li>
                                <li><a href="#">eFighting</a></li>
                                <li><a href="#">Formula 1</a></li>
                            </div>
                            <button className="moreless-button" onClick={() => { setView(!view) }}>{view === true ? "View Less" : "View More"}</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar