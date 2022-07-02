import React from 'react'
import TabNav from './TabNav'

const Baseball = () => {
    return (
        <>
            <div className='all_section'>
                <div className='container'>
                    <TabNav />
                    {/* <!--  Baseball --> */}
                    <div className="col-lg-12 isotope-item" data-filter="baseball" >
                        {/* <!-- Heading Component--> */}
                        <article className="heading-component">
                            <div className="heading-component-inner">
                                <h5 className="heading-component-title">Baseball
                                </h5>
                            </div>
                        </article>

                        <div className="sport-table-header">
                            <p>UCI Road world Championship (2)</p>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-10"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Janet Alexander</span><span className="sport-table-title-team">Charles Martin</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>0</span></span>
                                                <span className="sport-table-title-score"><span>1</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Janet Alexander" data-confrontation="Janet Alexander vs Charles Martin" data-wager-count="1.98" data-score="0:1"><span>Janet Alexander</span><span className="sport-table-wager-button-count">1.98</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Charles Martin" data-confrontation="Janet Alexander vs Charles Martin" data-wager-count="3.54" data-score="0:1"><span>Charles Martin</span><span className="sport-table-wager-button-count">3.54</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+15</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sport-table">
                            <div className="sport-table-tr">
                                <div className="row sport-row align-items-center row-15">
                                    <div className="col-sm-1 col-md-1 col-lg-1">
                                        <div className="sport-table-icon">
                                            <div className="sprite sprite-sport-icon-10"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-4 col-lg-3">
                                        <div className="sport-table-title">
                                            <div className="sport-table-title-item sport-table-title-item-left"><span className="sport-table-title-team">Terry Gonzales</span><span className="sport-table-title-team">Julie Wilson</span></div>
                                            <div className="sport-table-title-item sport-table-title-item-right"><span className="sport-table-title-score"><span>1</span></span>
                                                <span className="sport-table-title-score"><span>0</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-6 col-lg-7">
                                        <div className="sport-table-wager sport-table-wager-double"><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Terry Gonzales" data-confrontation="Terry Gonzales vs Julie Wilson" data-wager-count="4.05" data-score="1:0"><span>Terry Gonzales</span><span className="sport-table-wager-button-count">4.05</span></a><a className="sport-table-wager-button" href="#" data-toggle="modal" data-target="#sportModal" data-team-name="Julie Wilson" data-confrontation="Terry Gonzales vs Julie Wilson" data-wager-count="1.14" data-score="1:0"><span>Julie Wilson</span><span className="sport-table-wager-button-count">1.14</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 col-lg-1">
                                        <div className="sport-table-bonus"><span className="sport-table-bonus-count">+65</span><span className="sport-table-bonus-icon material-icons-chevron_right"></span></div>
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

export default Baseball