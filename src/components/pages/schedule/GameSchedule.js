import React from 'react';
import bavaria from '../../../assets/images/team-bavaria-fc-113x106.png'
import barcelona from '../../../assets/images/team-barcelona-119x102.png'
import celta from '../../../assets/images/team-celta-vigo-37x34.png'
import madrid from '../../../assets/images/team-real-madrid-75x106.png'
import sevilla from '../../../assets/images/team-sevilla-45x35.png'
import atletico from '../../../assets/images/team-atletico-100x100.png'
const GameSchedule = () => {
    return(
        <>
        
              {/* <!-- Heading Component--> */}
              <article className="heading-component">
                <div className="heading-component-inner">
                  <h5 className="heading-component-title">Game schedule
                  </h5>
                  <div className="heading-component-aside">
                    <ul className="list-inline list-inline-xs list-inline-middle">
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen3" style={{minWidth: "170px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">   
                            <span className="select2-chosen" id="select2-chosen-4">All Competitions</span>
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
                                <select className="select select-minimal" data-placeholder="Select an option" data-dropdown-class="select-minimal-dropdown" style={{minWidth: "170px", display:"none"}} tabIndex="-1" title="">
                          <option value="All Competitions" >All Competitions</option>
                          <option value="Champions League">Champions League</option>
                        </select>
                      </li>
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen5">
                            <a href="#" className="select2-choice" tabIndex="-1">   
                            <span className="select2-chosen" id="select2-chosen-6">May</span>
                            <abbr className="select2-search-choice-close"></abbr>   
                            <span className="select2-arrow" role="presentation">
                                <b role="presentation"></b>
                                </span>
                                </a>
                                <label htmlFor="s2id_autogen6" className="select2-offscreen"></label>
                                <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-6" id="s2id_autogen6"/>
                            <div className="select2-drop select2-display-none select-minimal-dropdown">   
                            <div className="select2-search select2-search-hidden select2-offscreen">      
                             <label htmlFor="s2id_autogen6_search" className="select2-offscreen"></label>       
                             <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-6" id="s2id_autogen6_search" placeholder=""/>   
                             </div>   
                             <ul className="select2-results" role="listbox" id="select2-results-6">   </ul>
                             </div>
                             </div>
                             <select className="select select-minimal" data-placeholder="Select an option" data-dropdown-class="select-minimal-dropdown" tabIndex="-1" title="" style={{display: "none"}}>
                          <option value="may" >May</option>
                          <option value="april">April</option>
                          <option value="march">March </option>
                        </select>
                      </li>
                      <li>
                        <div className="select2-container select select-minimal" id="s2id_autogen7">
                            <a href="#" className="select2-choice" tabIndex="-1">   
                            <span className="select2-chosen" id="select2-chosen-8">2016-2020</span>
                            <abbr className="select2-search-choice-close"></abbr>   
                            <span className="select2-arrow" role="presentation">
                                <b role="presentation"></b>
                                </span>
                                </a>
                                <label htmlFor="s2id_autogen8" className="select2-offscreen"></label>
                                <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-8" id="s2id_autogen8"/>
                                <div className="select2-drop select2-display-none select-minimal-dropdown">   <div className="select2-search select2-search-hidden select2-offscreen">       
                                <label htmlFor="s2id_autogen8_search" className="select2-offscreen"></label>       
                                <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder=""/>  
                                 </div>   
                                 <ul className="select2-results" role="listbox" id="select2-results-8">   </ul>
                                 </div>
                                 </div>
                                 <select className="select select-minimal" data-placeholder="Select an option" data-dropdown-class="select-minimal-dropdown" tabIndex="-1" title="" style={{display: "none"}}> 
                          <option value="2016-2020">2016-2020</option>
                          <option value="2015-2016">2015-2016</option>
                          <option value="2014-2015">2014-2015</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* <!-- Game Result Bug--> */}
              <article className="game-result">
                <div className="game-info">
                  <p className="game-info-subtitle">New Yorkers Stadium - 
                    <time dateTime="08:30"> 08:30 PM</time>
                  </p>
                  <h3 className="game-info-title">European soccer cup: day 38</h3>
                  <div className="game-info-main">
                    <div className="game-info-team game-info-team-first">
                      <figure><img src={atletico} alt="" width="100" height="100"/>
                      </figure>
                      <div className="game-result-team-name">Atletico</div>
                      <div className="game-result-team-country">USA</div>
                    </div>
                    <div className="game-info-middle game-info-middle-vertical">
                      <time className="time-big" dateTime="2020-04-17"><span className="heading-3">Fri 19</span> May 2020
                      </time>
                      <div className="game-result-divider-wrap"><span className="game-info-team-divider">VS</span></div>
                      <div className="group-sm">
                        <div className="button button-sm button-share-outline">Share
                          <ul className="game-info-share">
                            <li className="game-info-share-item"><a className="icon fa fa-facebook" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-twitter" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-google-plus" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-instagram" href="#"></a></li>
                          </ul>
                        </div><a className="button button-sm button-primary" href="#">Buy tickets</a>
                      </div>
                    </div>
                    <div className="game-info-team game-info-team-second">
                      <figure><img src={madrid} alt="" width="75" height="106"/>
                      </figure>
                      <div className="game-result-team-name">Real Madrid</div>
                      <div className="game-result-team-country">Spain</div>
                    </div>
                  </div>
                </div>
              </article>
              {/* <!-- Game Result Bug--> */}
              <article className="game-result">
                <div className="game-info">
                  <p className="game-info-subtitle">Bavaria Stadium - 
                    <time dateTime="08:30"> 08:30 PM</time>
                  </p>
                  <h3 className="game-info-title">Copa del Rey Final</h3>
                  <div className="game-info-main">
                    <div className="game-info-team game-info-team-first">
                      <figure><img src={bavaria} alt="" width="113" height="106"/>
                      </figure>
                      <div className="game-result-team-name">Bavaria FC</div>
                      <div className="game-result-team-country">Germany</div>
                    </div>
                    <div className="game-info-middle game-info-middle-vertical">
                      <time className="time-big" dateTime="2020-04-17"><span className="heading-3">Sun 21</span> May 2020
                      </time>
                      <div className="game-result-divider-wrap"><span className="game-info-team-divider">VS</span></div>
                      <div className="group-sm">
                        <div className="button button-sm button-share-outline">Share
                          <ul className="game-info-share">
                            <li className="game-info-share-item"><a className="icon fa fa-facebook" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-twitter" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-google-plus" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-instagram" href="#"></a></li>
                          </ul>
                        </div><a className="button button-sm button-primary" href="#">Buy tickets</a>
                      </div>
                    </div>
                    <div className="game-info-team game-info-team-second">
                      <figure><img src={atletico} alt="" width="100" height="100"/>
                      </figure>
                      <div className="game-result-team-name">Atletico</div>
                      <div className="game-result-team-country">USA</div>
                    </div>
                  </div>
                </div>
              </article>
              {/* <!-- Game Result Bug--> */}
              <article className="game-result">
                <div className="game-info">
                  <p className="game-info-subtitle">New Yorkers Stadium - 
                    <time dateTime="08:30"> 08:30 PM</time>
                  </p>
                  <h3 className="game-info-title">Semi-Final (FINAL FOUR)</h3>
                  <div className="game-info-main">
                    <div className="game-info-team game-info-team-first">
                      <figure><img src={atletico} alt="" width="100" height="100"/>
                      </figure>
                      <div className="game-result-team-name">Atletico</div>
                      <div className="game-result-team-country">USA</div>
                    </div>
                    <div className="game-info-middle game-info-middle-vertical">
                      <time className="time-big" dateTime="2020-04-17"><span className="heading-3">Wed 24</span> May 2020
                      </time>
                      <div className="game-result-divider-wrap"><span className="game-info-team-divider">VS</span></div>
                      <div className="group-sm">
                        <div className="button button-sm button-share-outline">Share
                          <ul className="game-info-share">
                            <li className="game-info-share-item"><a className="icon fa fa-facebook" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-twitter" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-google-plus" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-instagram" href="#"></a></li>
                          </ul>
                        </div><a className="button button-sm button-primary" href="#">Buy tickets</a>
                      </div>
                    </div>
                    <div className="game-info-team game-info-team-second">
                      <figure><img src={barcelona} alt="" width="119" height="102"/>
                      </figure>
                      <div className="game-result-team-name">Barcelona</div>
                      <div className="game-result-team-country">Spain</div>
                    </div>
                  </div>
                </div>
              </article>
              {/* <!-- Game Result Bug--> */}
              <article className="game-result">
                <div className="game-info">
                  <p className="game-info-subtitle">Sevilla Stadium - 
                    <time dateTime="08:30"> 08:30 PM</time>
                  </p>
                  <h3 className="game-info-title">Champions League</h3>
                  <div className="game-info-main">
                    <div className="game-info-team game-info-team-first">
                      <figure><img src={sevilla} alt="" width="123" height="99"/>
                      </figure>
                      <div className="game-result-team-name">Sevilla</div>
                      <div className="game-result-team-country">Spain</div>
                    </div>
                    <div className="game-info-middle game-info-middle-vertical">
                      <time className="time-big" dateTime="2020-04-17"><span className="heading-3">Sun 29</span> May 2020
                      </time>
                      <div className="game-result-divider-wrap"><span className="game-info-team-divider">VS</span></div>
                      <div className="group-sm">
                        <div className="button button-sm button-share-outline">Share
                          <ul className="game-info-share">
                            <li className="game-info-share-item"><a className="icon fa fa-facebook" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-twitter" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-google-plus" href="#"></a></li>
                            <li className="game-info-share-item"><a className="icon fa fa-instagram" href="#"></a></li>
                          </ul>
                        </div><a className="button button-sm button-primary" href="#">Buy tickets</a>
                      </div>
                    </div>
                    <div className="game-info-team game-info-team-second">
                      <figure><img src={atletico} alt="" width="100" height="100"/>
                      </figure>
                      <div className="game-result-team-name">Atletico</div>
                      <div className="game-result-team-country">USA</div>
                    </div>
                  </div>
                </div>
              </article>
            
        </>
    )
}


export default GameSchedule;