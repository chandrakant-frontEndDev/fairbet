import React from 'react';
import { Link } from 'react-router-dom';

const TabNav = () => {
    return (
        <>
                <div className="isotope-filters isotope-filters-horizontal">
                    <button className="isotope-filters-toggle button" data-custom-toggle="#isotope-filters" data-custom-toggle-hide-on-blur="true" data-custom-toggle-disable-on-blur="true">Select<span className="caret"></span></button>
                    <ul className="isotope-filters-list" id="isotope-filters">
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link " data-isotope-filter="*" data-isotope-group="gallery" to="/"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-01"></span></span><span className="isotope-filters-list-text">All sports</span> <span className="isotope-filters-list-count">29</span></Link></li>
                        <li className="isotope-filters-list-item cricket"><Link className="isotope-filters-list-link" data-isotope-filter="/cricket" data-isotope-group="gallery" to="/cricket"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-11"></span></span><span className="isotope-filters-list-text">Cricket</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="soccer" data-isotope-group="gallery" to="/soccer"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-12"></span></span><span className="isotope-filters-list-text">Soccer</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="tennis" data-isotope-group="gallery" to="/tennis"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-02"></span></span><span className="isotope-filters-list-text">Tennis</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="football" data-isotope-group="gallery" to="/football"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-07"></span></span><span className="isotope-filters-list-text">Football</span> <span className="isotope-filters-list-count">6</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="baseball" data-isotope-group="gallery" to="/baseball"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-05"></span></span><span className="isotope-filters-list-text">baseball</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="volleyball" data-isotope-group="gallery" to="/volleyball"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-13"></span></span><span className="isotope-filters-list-text">Volleyball</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="live-casino" data-isotope-group="gallery" to="/liveCasino"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-14"></span></span><span className="isotope-filters-list-text">Live Casino</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="live-card" data-isotope-group="gallery" to="/liveCard"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-15"></span></span><span className="isotope-filters-list-text">Live Card</span> <span className="isotope-filters-list-count">2</span></Link></li>
                        <li className="isotope-filters-list-item"><Link className="isotope-filters-list-link" data-isotope-filter="slot-games" data-isotope-group="gallery" to="/slotGames"><span className="isotope-filters-list-img"><span className="sprite sprite-sport-icon-10"></span></span><span className="isotope-filters-list-text">Slot Games</span> <span className="isotope-filters-list-count">2</span></Link></li>
                    </ul>
                </div>
        </>
    )
}

export default TabNav