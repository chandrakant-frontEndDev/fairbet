import React from 'react'
import TabNav from './TabNav'

const SlotGames = () => {
    return (
        <>
            <div className='all_section'>
                <div className='container'>
                    <TabNav />
                    {/* <!-- Slot Games--> */}
                    <div className="col-lg-12 isotope-item" data-filter="slot-games">
                        {/* <!-- Heading Component--> */}
                        <article className="heading-component">
                            <div className="heading-component-inner">
                                <h5 className="heading-component-title">Slot Games
                                </h5>
                            </div>
                        </article>

                        <div className="sport-table-header">
                            <p>NBA Finals (1)</p>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-04"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">New York Knicks</span><span className="sport-table-title-team">Houston Rockets</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>53</span></span>
                                                <span className="sport-table-title-score"><span>66</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="New York Knicks" data-confrontation="New York Knicks vs Houston Rockets" data-wager-count="2.05" data-score="53:66"><span>New York Knicks</span><span className="sport-table-wager-button-count">2.05</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Houston Rockets" data-confrontation="New York Knicks vs Houston Rockets" data-wager-count="1.005" data-score="53:66"><span>Houston Rockets</span><span className="sport-table-wager-button-count">1.005</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+25</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
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

export default SlotGames