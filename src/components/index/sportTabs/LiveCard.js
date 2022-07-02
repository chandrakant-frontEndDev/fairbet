import React from 'react'
import TabNav from './TabNav'

const LiveCard = () => {
    return (
        <>
            <div className='all_section'>
                <div className='container'>
                    <TabNav />
                    {/* <!-- Live Card--> */}
                    <div className="col-lg-12 isotope-item" data-filter="live-card" >
                        {/* <!-- Heading Component--> */}
                        <article className="heading-component">
                            <div className="heading-component-inner">
                                <h5 className="heading-component-title">Live Card
                                </h5>
                            </div>
                        </article>

                        <div className="sport-table-header">
                            <p>Mlb (2)</p>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-05"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Buffalo Bisons</span><span className="sport-table-title-team">Lehigh Valley Ironpigs</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>0</span></span>
                                                {/* <!--span.sport-table-title-team= obj.team[1][0]--> */}
                                                <span className="sport-table-title-score"><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Buffalo Bisons" data-confrontation="Buffalo Bisons vs Lehigh Valley Ironpigs" data-wager-count="13.5" data-score="0:0"><span>Buffalo Bisons</span><span className="sport-table-wager-button-count">13.5</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Lehigh Valley Ironpigs" data-confrontation="Buffalo Bisons vs Lehigh Valley Ironpigs" data-wager-count="1.0005" data-score="0:0"><span>Lehigh Valley Ironpigs</span><span className="sport-table-wager-button-count">1.0005</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+25</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-05"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Syracuse Chiefs</span><span className="sport-table-title-team">Toledo Mud Hens</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>0</span></span>
                                                <span className="sport-table-title-score"><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Syracuse Chiefs" data-confrontation="Syracuse Chiefs vs Toledo Mud Hens" data-wager-count="2.10" data-score="0:0"><span>Syracuse Chiefs</span><span className="sport-table-wager-button-count">2.10</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Toledo Mud Hens" data-confrontation="Syracuse Chiefs vs Toledo Mud Hens" data-wager-count="1.68" data-score="0:0"><span>Toledo Mud Hens</span><span className="sport-table-wager-button-count">1.68</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+46</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveCard