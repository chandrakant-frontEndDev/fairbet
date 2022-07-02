import React from 'react'
import TabNav from './TabNav'

const Tannis = () => {
    return (
        <>
            <div className='all_section'>
                <div className='container'>
                    <TabNav />
                    {/* <!-- Tennis--> */}
                    <div className="col-lg-12 isotope-item" data-filter="tennis">
                        {/* <!-- Heading Component--> */}
                        <article className="heading-component">
                            <div className="heading-component-inner">
                                <h5 className="heading-component-title">Tennis
                                </h5>
                            </div>
                        </article>
                        <div className="sport-table-header">
                            <p>US International (4)</p>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-06"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Harry Stewart</span><span className="sport-table-title-team">Donald Crawford</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>7</span><span>0</span><span>0</span></span>
                                                <span className="sport-table-title-score"><span>6</span><span>1</span><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Harry Stewart" data-confrontation="Harry Stewart vs Donald Crawford" data-wager-count="13.5" data-score="7:6"><span>Harry Stewart</span><span className="sport-table-wager-button-count">13.5</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Donald Crawford" data-confrontation="Harry Stewart vs Donald Crawford" data-wager-count="1.005" data-score="7:6"><span>Donald Crawford</span><span className="sport-table-wager-button-count">1.005</span></a>
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
                                            <div className="sprite sprite-sport-icon-06"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Peter Wells</span><span className="sport-table-title-team">Tyrone Norman</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>5</span><span>0</span></span>
                                                {/* <!--span.sport-table-title-team= obj.team[1][0]--> */}
                                                <span className="sport-table-title-score"><span>4</span><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Peter Wells" data-confrontation="Peter Wells vs Tyrone Norman" data-wager-count="2.10" data-score="5:4"><span>Peter Wells</span><span className="sport-table-wager-button-count">2.10</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Tyrone Norman" data-confrontation="Peter Wells vs Tyrone Norman" data-wager-count="1.68" data-score="5:4"><span>Tyrone Norman</span><span className="sport-table-wager-button-count">1.68</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+46</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-06"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Emily Sanders</span><span className="sport-table-title-team">Mary Clarke</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>5</span><span>3</span><span>0</span></span>
                                                {/* <!--span.sport-table-title-team= obj.team[1][0]--> */}
                                                <span className="sport-table-title-score"><span>7</span><span>4</span><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Emily Sanders" data-confrontation="Emily Sanders vs Mary Clarke" data-wager-count="1.25" data-score="5:7"><span>Emily Sanders</span><span className="sport-table-wager-button-count">1.25</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Mary Clarke" data-confrontation="Emily Sanders vs Mary Clarke" data-wager-count="3.75" data-score="5:7"><span>Mary Clarke</span><span className="sport-table-wager-button-count">3.75</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+51</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-06"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Gavin Simpson</span><span className="sport-table-title-team">Simon Warner</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>4</span><span>0</span></span>
                                                {/* <!--span.sport-table-title-team= obj.team[1][0]--> */}
                                                <span className="sport-table-title-score"><span>4</span><span>2</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Gavin Simpson" data-confrontation="Gavin Simpson vs Simon Warner" data-wager-count="3.37" data-score="4:4"><span>Gavin Simpson</span><span className="sport-table-wager-button-count">3.37</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Simon Warner" data-confrontation="Gavin Simpson vs Simon Warner" data-wager-count="8.15" data-score="4:4"><span>Simon Warner</span><span className="sport-table-wager-button-count">8.15</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+32</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
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

export default Tannis