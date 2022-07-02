import React from 'react';
import HeroBanner from '../../authentication/HeroBanner';
import bavaria from '../../assets/images/team-bavaria-fc-39x37.png'
import barcelona from '../../assets/images/team-barcelona-36x31.png'
import celta from '../../assets/images/team-celta-vigo-37x34.png'
import madrid from '../../assets/images/team-real-madrid-29x43.png'
import sevilla from '../../assets/images/team-sevilla-45x35.png'
import atletico from '../../assets/images/team-atletico-37x37.png'
import atletico1 from '../../assets/images/team-atletico-55x55.png'
import madrid1 from '../../assets/images/team-real-madrid-41x59.png'
import bavaria1 from '../../assets/images/team-bavaria-fc-56x52.png'
import sevilla1 from '../../assets/images/team-sevilla-57x46.png'

const Standings = () => {
    return (
        <>
            <HeroBanner auth="STANDINGS" />

            <section className="section section-sm bg-gray-100">
                <div className="container">
                    <div className="row row-50">
                        <div className="col-lg-7 col-xl-8">
                            <div className="row row-50">
                                <div className="col-12">
                                    {/* <!-- Heading Component--> */}
                                    <article className="heading-component">
                                        <div className="heading-component-inner">
                                            <h5 className="heading-component-title">Standings
                                            </h5>
                                            <div className="heading-component-aside">
                                                <ul className="list-inline list-inline-xs list-inline-middle">
                                                    <li>
                                                        <div className="select2-container select select-minimal" id="s2id_autogen3" style={{minWidth: "124px"}}><a href="#" className="select2-choice" tabIndex="-1">
                                                            <span className="select2-chosen" id="select2-chosen-4">Champions League</span>
                                                            <abbr className="select2-search-choice-close"></abbr>
                                                            <span className="select2-arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </a>
                                                            <label htmlFor="s2id_autogen4" className="select2-offscreen"></label>
                                                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4" />
                                                        </div>
                                                        <select className="select select-minimal" data-placeholder="Champions League" data-dropdown-class="select-minimal-dropdown" style={{minWidth: "124px", display:"none"}} tabIndex="-1" title="">
                                                            <option value="Champions League" >Champions League</option>
                                                            <option value="Europa League">Europa League</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <div className="select2-container select select-minimal" id="s2id_autogen5" style={{minWidth: "110px"}}><a href="#" className="select2-choice" tabIndex="-1">
                                                            <span className="select2-chosen" id="select2-chosen-6">2016-2020</span>
                                                            <abbr className="select2-search-choice-close"></abbr>
                                                            <span className="select2-arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </a>
                                                            <label htmlFor="s2id_autogen6" className="select2-offscreen"></label>
                                                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-6" id="s2id_autogen6" />
                                                        </div>
                                                        <select className="select select-minimal" data-placeholder="2016-2020" data-dropdown-class="select-minimal-dropdown" style={{minWidth: "110px", display:"none"}} tabIndex="-1" title="">
                                                            <option value="2016-2020" >2016-2020</option>
                                                            <option value="2015-2016">2015-2016</option>
                                                            <option value="2014-2015">2014-2015</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>

                                    <div className="card-standing card-group-custom card-standing-index" id="accordion1" role="tablist" aria-multiselectable="false">
                                        <div className="card-standing-caption">
                                            <div className="card-standing-position">Pos</div>
                                            <div className="card-standing-caption-aside">
                                                <div className="card-standing-team">Team</div>
                                                <div className="card-standing-number">W</div>
                                                <div className="card-standing-number">L</div>
                                                <div className="card-standing-number">T</div>
                                                <div className="card-standing-points">PTS</div>
                                                <div className="card-standing-diff">DIFF</div>
                                            </div>
                                        </div>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading1" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={atletico} alt="" width="37" height="37" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Atletico</div>
                                                            <div className="card-standing-team-country">USA</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button"><a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse1" aria-controls="accordion1Collapse1"></a></div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse1" role="tabpanel" aria-labelledby="accordion1Heading1">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading2" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={sevilla} alt="" width="45" height="35" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Sevilla</div>
                                                            <div className="card-standing-team-country">Spain</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button"><a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse2" aria-controls="accordion1Collapse2"></a></div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse2" role="tabpanel" aria-labelledby="accordion1Heading2">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading3" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={madrid} alt="" width="29" height="43" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Real Madrid</div>
                                                            <div className="card-standing-team-country">Spain</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button">
                                                        <a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse3" aria-controls="accordion1Collapse3">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse3" role="tabpanel" aria-labelledby="accordion1Heading3">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading4" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={celta} alt="" width="37" height="34" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Celta Vigo</div>
                                                            <div className="card-standing-team-country">Italy</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button">
                                                        <a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse4" aria-controls="accordion1Collapse4">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse4" role="tabpanel" aria-labelledby="accordion1Heading4">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading5" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={barcelona} alt="" width="36" height="31" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Barcelona</div>
                                                            <div className="card-standing-team-country">Spain</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button"><a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse5" aria-controls="accordion1Collapse5"></a></div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse5" role="tabpanel" aria-labelledby="accordion1Heading5">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* <!-- Bootstrap card--> */}
                                        <article className="card card-custom">
                                            <div className="card-standing-position card-standing-counter"></div>
                                            <div className="card-header" id="accordion1Heading6" role="tab">
                                                <div className="card-standing-team-item">
                                                    <div className="card-standing-team">
                                                        <div className="card-standing-team-figure"><img src={bavaria} alt="" width="39" height="37" />
                                                        </div>
                                                        <div className="card-standing-team-title">
                                                            <div className="card-standing-team-name">Bavaria FC</div>
                                                            <div className="card-standing-team-country">Germany</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-standing-number">153</div>
                                                    <div className="card-standing-number">30</div>
                                                    <div className="card-standing-number">1</div>
                                                    <div className="card-standing-points">586</div>
                                                    <div className="card-standing-diff">+12</div>
                                                    <div className="card-standing-button">
                                                        <a className="card-standing-toogle material-icons-remove collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#accordion1Collapse6" aria-controls="accordion1Collapse6"></a></div>
                                                </div>
                                            </div>
                                            <div className="collapse" id="accordion1Collapse6" role="tabpanel" aria-labelledby="accordion1Heading6">
                                                <div className="card-body">
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Home</div>
                                                        <div className="card-standing-number">78</div>
                                                        <div className="card-standing-number">2</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                    <div className="card-standing-divider"></div>
                                                    <div className="card-standing-team-details">
                                                        <div className="card-standing-game-status">Away</div>
                                                        <div className="card-standing-number">26</div>
                                                        <div className="card-standing-number">28</div>
                                                        <div className="card-standing-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* <!-- Heading Component--> */}
                                    <article className="heading-component">
                                        <div className="heading-component-inner">
                                            <h5 className="heading-component-title">Glossary Terms
                                            </h5>
                                        </div>
                                    </article>

                                    <div className="game-glossary">
                                        <div className="game-glossary-wrap row-10">
                                            <div className="game-glossary-column">
                                                <table className="game-glossary-terms">
                                                    <tbody><tr>
                                                        <td>W:</td>
                                                        <td>Wins</td>
                                                    </tr>
                                                        <tr>
                                                            <td>L:</td>
                                                            <td>Loses</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                            <div className="game-glossary-column">
                                                <table className="game-glossary-terms">
                                                    <tbody><tr>
                                                        <td>T:</td>
                                                        <td>Ties</td>
                                                    </tr>
                                                        <tr>
                                                            <td>PTS:</td>
                                                            <td>Winning Percentage</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                            <div className="game-glossary-column">
                                                <table className="game-glossary-terms">
                                                    <tbody><tr>
                                                        <td>DIFF:</td>
                                                        <td>Point Differential</td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            {/* <!-- Heading Component--> */}
                            <article className="heading-component">
                                <div className="heading-component-inner">
                                    <h5 className="heading-component-title">Latest Games results
                                    </h5>
                                </div>
                            </article>

                            {/* <!-- Game Result Classic--> */}
                            <article className="game-result game-result-classic">
                                <div className="game-result-main">
                                    <div className="game-result-team game-result-team-first">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55" />
                                        </figure>
                                        <div className="game-result-team-name">Atletico</div>
                                        <div className="game-result-team-country">USA</div>
                                    </div>
                                    <div className="game-result-middle">
                                        <div className="game-result-score-wrap">
                                            <div className="game-result-score game-result-team-win">2<span className="game-result-team-label game-result-team-label-top">Win</span>
                                            </div>
                                            <div className="game-result-score-divider">
                                                {/* <svg x="0px" y="0px" width="7px" height="21px" viewBox="0 0 7 21" enable-background="new 0 0 7 21" xml:space="preserve">
                                                    <g>
                                                        <circle cx="3.5" cy="3.5" r="3"></circle>
                                                        <path d="M3.5,1C4.879,1,6,2.122,6,3.5S4.879,6,3.5,6S1,4.878,1,3.5S2.122,1,3.5,1 M3.5,0C1.567,0,0,1.567,0,3.5S1.567,7,3.5,7      S7,5.433,7,3.5S5.433,0,3.5,0L3.5,0z"></path>
                                                    </g>
                                                    <g>
                                                        <circle cx="3.695" cy="17.5" r="3"></circle>
                                                        <path d="M3.695,15c1.378,0,2.5,1.122,2.5,2.5S5.073,20,3.695,20s-2.5-1.122-2.5-2.5S2.316,15,3.695,15 M3.695,14      c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S5.628,14,3.695,14L3.695,14z"></path>
                                                    </g>
                                                </svg> */}
                                            </div>
                                            <div className="game-result-score">1
                                            </div>
                                        </div>
                                        <div className="game-results-status">Home</div>
                                    </div>
                                    <div className="game-result-team game-result-team-second">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={madrid1} alt="" width="41" height="59" />
                                        </figure>
                                        <div className="game-result-team-name">Real madrid</div>
                                        <div className="game-result-team-country">Spain</div>
                                    </div>
                                </div>
                                <div className="game-result-footer">
                                    <ul className="game-result-details">
                                        <li>New Yorkers Stadium</li>
                                        <li>
                                            <time dateTime="2020-04-14">April 14, 2020</time>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            {/* <!-- Game Result Classic--> */}
                            <article className="game-result game-result-classic">
                                <div className="game-result-main">
                                    <div className="game-result-team game-result-team-first">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={bavaria1} alt="" width="56" height="52" />
                                        </figure>
                                        <div className="game-result-team-name">Bavaria FC</div>
                                        <div className="game-result-team-country">Germany</div>
                                    </div>
                                    <div className="game-result-middle">
                                        <div className="game-result-score-wrap">
                                            <div className="game-result-score">2
                                            </div>
                                            <div className="game-result-score-divider">
                                                {/* <svg x="0px" y="0px" width="7px" height="21px" viewBox="0 0 7 21" enable-background="new 0 0 7 21" xml:space="preserve">
                                                    <g>
                                                        <circle cx="3.5" cy="3.5" r="3"></circle>
                                                        <path d="M3.5,1C4.879,1,6,2.122,6,3.5S4.879,6,3.5,6S1,4.878,1,3.5S2.122,1,3.5,1 M3.5,0C1.567,0,0,1.567,0,3.5S1.567,7,3.5,7      S7,5.433,7,3.5S5.433,0,3.5,0L3.5,0z"></path>
                                                    </g>
                                                    <g>
                                                        <circle cx="3.695" cy="17.5" r="3"></circle>
                                                        <path d="M3.695,15c1.378,0,2.5,1.122,2.5,2.5S5.073,20,3.695,20s-2.5-1.122-2.5-2.5S2.316,15,3.695,15 M3.695,14      c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S5.628,14,3.695,14L3.695,14z"></path>
                                                    </g>
                                                </svg> */}
                                            </div>
                                            <div className="game-result-score game-result-team-win">3<span className="game-result-team-label game-result-team-label-top">Win</span>
                                            </div>
                                        </div>
                                        <div className="game-results-status">Away</div>
                                    </div>
                                    <div className="game-result-team game-result-team-second">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55" />
                                        </figure>
                                        <div className="game-result-team-name">Atletico</div>
                                        <div className="game-result-team-country">USA</div>
                                    </div>
                                </div>
                                <div className="game-result-footer">
                                    <ul className="game-result-details">
                                        <li>Bavaria Stadium</li>
                                        <li>
                                            <time dateTime="2020-04-14">April 14, 2020</time>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            {/* <!-- Game Result Classic--> */}
                            <article className="game-result game-result-classic">
                                <div className="game-result-main">
                                    <div className="game-result-team game-result-team-first">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55" />
                                        </figure>
                                        <div className="game-result-team-name">Atletico</div>
                                        <div className="game-result-team-country">USA</div>
                                    </div>
                                    <div className="game-result-middle">
                                        <div className="game-result-score-wrap">
                                            <div className="game-result-score game-result-team-win">4<span className="game-result-team-label game-result-team-label-top">Win</span>
                                            </div>
                                            <div className="game-result-score-divider">
                                                {/* <svg x="0px" y="0px" width="7px" height="21px" viewBox="0 0 7 21" enable-background="new 0 0 7 21" xml:space="preserve">
                                                    <g>
                                                        <circle cx="3.5" cy="3.5" r="3"></circle>
                                                        <path d="M3.5,1C4.879,1,6,2.122,6,3.5S4.879,6,3.5,6S1,4.878,1,3.5S2.122,1,3.5,1 M3.5,0C1.567,0,0,1.567,0,3.5S1.567,7,3.5,7      S7,5.433,7,3.5S5.433,0,3.5,0L3.5,0z"></path>
                                                    </g>
                                                    <g>
                                                        <circle cx="3.695" cy="17.5" r="3"></circle>
                                                        <path d="M3.695,15c1.378,0,2.5,1.122,2.5,2.5S5.073,20,3.695,20s-2.5-1.122-2.5-2.5S2.316,15,3.695,15 M3.695,14      c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S5.628,14,3.695,14L3.695,14z"></path>
                                                    </g>
                                                </svg> */}
                                            </div>
                                            <div className="game-result-score">1
                                            </div>
                                        </div>
                                        <div className="game-results-status">Home</div>
                                    </div>
                                    <div className="game-result-team game-result-team-second">
                                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={sevilla1} alt="" width="57" height="46" />
                                        </figure>
                                        <div className="game-result-team-name">Sevilla</div>
                                        <div className="game-result-team-country">Spain</div>
                                    </div>
                                </div>
                                <div className="game-result-footer">
                                    <ul className="game-result-details">
                                        <li>New Yorkers Stadium</li>
                                        <li>
                                            <time dateTime="2020-04-14">April 14, 2020</time>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Standings;