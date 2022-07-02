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
import barcelona1 from '../../assets/images/team-barcelona-57x49.png'
import { NavLink } from 'react-router-dom';

const LatestGameResult = () => {
    return(
        <>
        <HeroBanner auth = "LATEST GAME RESULTS" />

        <section className="section section-sm bg-gray-100">    
        <div className="container">
          <div className="row row-50">
            <div className="col-xl-8">
              {/* <!-- Heading Component--> */}
              <article className="heading-component">
                <div className="heading-component-inner">
                  <h5 className="heading-component-title">Latest game results
                  </h5>
                  <div className="heading-component-aside">
                    <ul className="list-inline list-inline-xs list-inline-middle">
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen3" style={{minWidth:"124px"}}><a href="#" className="select2-choice" tabIndex="-1">   
                        <span className="select2-chosen" id="select2-chosen-4">Playoffs 2020</span>
                        <abbr className="select2-search-choice-close"></abbr>   
                        <span className="select2-arrow" role="presentation">
                            <b role="presentation"></b>
                            </span>
                            </a>
                            <label htmlFor="s2id_autogen4" className="select2-offscreen"></label>
                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4"/>
                            <div className="select2-drop select2-display-none select-minimal-dropdown">   
                            <div className="select2-search select2-search-hidden select2-offscreen">       
                            <label htmlFor="s2id_autogen4_search" className="select2-offscreen"></label>       
                            <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder=""/>   
                            </div>   
                            <ul className="select2-results" role="listbox" id="select2-results-4">   </ul>
                            </div>
                            </div>
                            <select className="select select-minimal" data-placeholder="Champions League" data-dropdown-classname="select-minimal-dropdown" style={{minWidth:"124px", display:"none"}} tabIndex="-1" title="">
                          <option value="playoffs 2020" >Playoffs 2020</option>
                          <option value="playoffs 2016">Playoffs 2016</option>
                          <option value="playoffs 2015">Playoffs 2015</option>
                          <option value="playoffs 2014">Playoffs 2014</option>
                          <option value="playoffs 2013">Playoffs 2013</option>
                        </select>
                      </li>
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen5" style={{minWidth:"110px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">   
                        <span className="select2-chosen" id="select2-chosen-6">October</span>
                        <abbr className="select2-search-choice-close"></abbr>   
                        <span className="select2-arrow" role="presentation">
                            <b role="presentation"></b>
                            </span>
                            </a>
                            <label htmlFor="s2id_autogen6" className="select2-offscreen"></label>
                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-6" id="s2id_autogen6"/>
                            <div className="select2-drop select2-display-none select-minimal-dropdown">   <div className="select2-search select2-search-hidden select2-offscreen">       
                            <label htmlFor="s2id_autogen6_search" className="select2-offscreen"></label>      
                             <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-6" id="s2id_autogen6_search" placeholder=""/>  
                              </div>   
                              <ul className="select2-results" role="listbox" id="select2-results-6">   </ul>
                              </div>
                              </div>
                              <select className="select select-minimal" data-placeholder="2016-2020" data-dropdown-classname="select-minimal-dropdown" style={{minWidth:"110px", display:"none"}} tabIndex="-1" title="">

                          <option value="october" >October</option>
                          <option value="november">November</option>
                          <option value="december">December</option>
                          <option value="january">January</option>
                          <option value="february">February</option>
                        </select>
                      </li>
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen7" style={{minWidth:"110px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">   
                            <span className="select2-chosen" id="select2-chosen-8">2016-2020</span>
                            <abbr className="select2-search-choice-close"></abbr>   
                            <span className="select2-arrow" role="presentation">
                                <b role="presentation"></b>
                                </span>
                                </a>
                                <label htmlFor="s2id_autogen8" className="select2-offscreen"></label>
                                <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-8" id="s2id_autogen8"/>
                                <div className="select2-drop select2-display-none select-minimal-dropdown">   
                                <div className="select2-search select2-search-hidden select2-offscreen">       
                                <label htmlFor="s2id_autogen8_search" className="select2-offscreen"></label>       
                                <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder=""/>   
                                </div>   
                                <ul className="select2-results" role="listbox" id="select2-results-8">   </ul>
                                </div>
                                </div>
                                <select className="select select-minimal" data-placeholder="2016-2020" data-dropdown-classname="select-minimal-dropdown" style={{minWidth:"110px", display:"none"}} tabIndex="-1" title="">
                          <option value="2016-2020" >2016-2020</option>
                          <option value="2015-2016">2015-2016</option>
                          <option value="2014-2015">2014-2015</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <div className="row row-30">
                <div className="col-md-6">
                  {/* <!-- Game Result Classic--> */}
                  <article className="game-result game-result-classic">
                    <div className="game-result-main">
                      <div className="game-result-team game-result-team-first">
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55"/>
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
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={madrid1} alt="" width="41" height="59"/>
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
                </div>
                <div className="col-md-6">
                  {/* <!-- Game Result Classic--> */}
                  <article className="game-result game-result-classic">
                    <div className="game-result-main">
                      <div className="game-result-team game-result-team-first">
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={bavaria1} alt="" width="56" height="52"/>
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
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55"/>
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
                </div>
                <div className="col-md-6">
                  {/* <!-- Game Result Classic--> */}
                  <article className="game-result game-result-classic">
                    <div className="game-result-main">
                      <div className="game-result-team game-result-team-first">
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico} alt="" width="55" height="55"/>
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
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={sevilla1} alt="" width="57" height="46"/>
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
                <div className="col-md-6">
                  {/* <!-- Game Result Classic--> */}
                  <article className="game-result game-result-classic">
                    <div className="game-result-main">
                      <div className="game-result-team game-result-team-first">
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico1} alt="" width="55" height="55"/>
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
                        <figure className="game-result-team-figure game-result-team-figure-big"><img src={barcelona1} alt="" width="57" height="49"/>
                        </figure>
                        <div className="game-result-team-name">Barcelona</div>
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
            <div className="col-xl-4">
              {/* <!-- Heading Component--> */}
              <article className="heading-component">
                <div className="heading-component-inner">
                  <h5 className="heading-component-title">Standings
                  </h5><NavLink className="button button-xs button-gray-outline" to="/standings">Full Standings</NavLink>
                </div>
              </article>

              {/* <!-- Table team--> */}
              <div className="table-custom-responsive">
                <table className="table-custom table-standings table-classic">
                  <thead>
                    <tr>
                      <th colSpan="2">Team Position</th>
                      <th>W</th>
                      <th>L</th>
                      <th>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span>1</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={atletico} alt="" width="37" height="37"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Atletico</div>
                          <div className="team-country">USA</div>
                        </div>
                      </td>
                      <td>153</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                    <tr>
                      <td><span>2</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={sevilla} alt="" width="45" height="35"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Sevilla</div>
                          <div className="team-country">Spain</div>
                        </div>
                      </td>
                      <td>120</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                    <tr>
                      <td><span>3</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={madrid}  alt="" width="29" height="43"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Real Madrid</div>
                          <div className="team-country">Spain</div>
                        </div>
                      </td>
                      <td>100</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                    <tr>
                      <td><span>4</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={celta}  alt="" width="37" height="34"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Celta Vigo</div>
                          <div className="team-country">Italy</div>
                        </div>
                      </td>
                      <td>98</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                    <tr>
                      <td><span>5</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={barcelona} alt="" width="36" height="31"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Barcelona</div>
                          <div className="team-country">Spain</div>
                        </div>
                      </td>
                      <td>98</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                    <tr>
                      <td><span>6</span></td>
                      <td className="team-inline">
                        <div className="team-figure"><img src={bavaria} alt="" width="39" height="37"/>
                        </div>
                        <div className="team-title">
                          <div className="team-name">Bavaria FC</div>
                          <div className="team-country">Germany</div>
                        </div>
                      </td>
                      <td>98</td>
                      <td>30</td>
                      <td>186</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}



export default LatestGameResult;