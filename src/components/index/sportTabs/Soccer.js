import React from 'react'
import OpenBets from './OpenBets'
import SideBar from './SideBar'
import TabNav from './TabNav'

const Soccer = () => {
    return (
        <>
            <div className='filter_data bg-gray-100'>
                <div className='container-fluid'>
                    <div className='row'>
                        <SideBar />

                        {/* <!-- Soccer--> */}
                        <div className='col-md-6'>
                            <div className="isotope-item" data-filter="soccer">
                                <TabNav />
                                {/* <!-- Heading Component--> */}
                                <article className="heading-component">
                                    <div className="heading-component-inner">
                                        <h5 className="heading-component-title">Soccer
                                        </h5>
                                        <div className='tab_nav'>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="live-tab" data-toggle="tab" href="#live" role="tab" aria-controls="live" aria-selected="true">LIVE &amp; UPCOMING</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="leagues-tab" data-toggle="tab" href="#leagues" role="tab" aria-controls="leagues" aria-selected="false">LEAGUES</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="result-tab" data-toggle="tab" href="#result" role="tab" aria-controls="result" aria-selected="false">RESULT</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- Live and upcoming page --> */}
                                <div className="match_wrap">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="live" role="tabpanel" aria-labelledby="live-tab">
                                            <div className="team_wrap">
                                                <div className="team_live_name">
                                                    <p>Sri Lanka </p> <span>V</span> <p>Australia</p>
                                                    <div className="team_time">
                                                        <p>Tomorrow at 2:30 PM</p>
                                                    </div>
                                                </div>
                                                <div className="match_status">
                                                    <p>upcoming</p>
                                                </div>
                                            </div>
                                            <div className="team_table">
                                                <div className="team_name">
                                                    <div className="team_name_wrap">
                                                        <p>Sri Lanka</p>
                                                    </div>
                                                    <div className="team_score">
                                                        <div className="score_wrap">
                                                            <p>Back</p>
                                                            <p>Lay</p>
                                                        </div>
                                                        <div className="score_about">
                                                            <p>245</p>
                                                            <p>545</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_name">
                                                    <div className="team_name_wrap">
                                                        <p>Australia</p>
                                                    </div>
                                                    <div className="team_score">
                                                        <div className="score_wrap">
                                                            <p>Back</p>
                                                            <p>Lay</p>
                                                        </div>
                                                        <div className="score_about">
                                                            <p>645</p>
                                                            <p>745</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="leagues" role="tabpanel" aria-labelledby="leagues-tab">
                                            <ul className="leagues_details">
                                                <li><a href="#">One Day Internationals</a></li>
                                                <li><a href="#">Test Matches</a></li>
                                                <li><a href="#">Indian Premier League</a></li>
                                                <li><a href="#">ICC Women's World Cup</a></li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="result" role="tabpanel" aria-labelledby="result-tab">Contact</div>
                                    </div>
                                </div>
                                {/* <!-- // Live and upcoming page --> */}
                            </div>
                        </div>
                        <OpenBets />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Soccer