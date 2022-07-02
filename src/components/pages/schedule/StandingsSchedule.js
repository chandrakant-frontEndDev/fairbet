import React from 'react';
import bavaria from '../../../assets/images/team-bavaria-fc-56x52.png'
import barcelona from '../../../assets/images/team-barcelona-36x31.png'
import celta from '../../../assets/images/team-celta-vigo-37x34.png'
import madrid from '../../../assets/images/team-real-madrid-41x59.png'
import sevilla from '../../../assets/images/team-sevilla-57x46.png'
import atletico from '../../../assets/images/team-atletico-55x55.png'
import player3 from '../../../assets/images/player-3-229x268.png'
import gallary_image_1 from '../../../assets/images/gallery-soccer-1-116x116.jpg'
import gallary_image_2 from '../../../assets/images/gallery-soccer-2-116x116.jpg'
import gallary_image_3 from '../../../assets/images/gallery-soccer-3-116x116.jpg'
import gallary_image_4 from '../../../assets/images/gallery-soccer-4-116x116.jpg'
import gallary_image_5 from '../../../assets/images/gallery-soccer-5-116x116.jpg'
import gallary_image_6 from '../../../assets/images/gallery-soccer-6-116x116.jpg'
import { NavLink } from 'react-router-dom';
const StandingsSchedule = () => {
    return(
        <>
       
              <div className="row row-30">
                <div className="col-md-6 col-lg-12">
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
                            <div className="team-figure"><img src={madrid} alt="" width="29" height="43"/>
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
                            <div className="team-figure"><img src={celta} alt="" width="37" height="34"/>
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
                <div className="col-md-6 col-lg-12">
                  {/* <!-- Heading Component--> */}
                  <article className="heading-component">
                    <div className="heading-component-inner">
                      <h5 className="heading-component-title">Player of the month
                      </h5>
                    </div>
                  </article>

                  {/* <!-- Player Info Minimal--> */}
                  <div className="player-info-minimal">
                    <div className="player-info-minimal-figure"><img src={player3} alt="" width="229" height="268"/>
                    </div>
                    <div className="player-info-minimal-number">
                      <p>21</p>
                    </div>
                    <div className="player-info-minimal-content">
                      <div className="player-info-minimal-title">
                        <h3>Jack<span>Windsor</span></h3>
                      </div>
                      <div className="player-info-minimal-progress">
                        {/* <!-- Linear progress bar--> */}
                        <article className="progress-linear progress-bar-modern animated-first">
                          <div className="progress-header">
                            <p>Pass Acc</p><span className="progress-value">87</span>
                          </div>
                          <div className="progress-bar-linear-wrap">
                            <div className="progress-bar-linear" style={{width: "87%"}}></div>
                          </div>
                        </article>
                        {/* <!-- Linear progress bar--> */}
                        <article className="progress-linear progress-bar-modern animated-first">
                          <div className="progress-header">
                            <p>Shots Acc</p><span className="progress-value">93</span>
                          </div>
                          <div className="progress-bar-linear-wrap">
                            <div className="progress-bar-linear" style={{width: "93%"}}></div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12 owl-carousel-outer-navigation">
                  {/* <!-- Heading Component--> */}
                  <article className="heading-component">
                    <div className="heading-component-inner">
                      <h5 className="heading-component-title">Latest Game results
                      </h5>
                      <div className="owl-carousel-arrows-outline">
                        <div className="owl-nav">
                          <button className="owl-arrow owl-arrow-prev"></button>
                          <button className="owl-arrow owl-arrow-next"></button>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* <!-- Owl Carousel--> */}
                  <div className="owl-carousel owl-loaded" data-items="1" data-dots="false" data-nav="true" data-stage-padding="0" data-loop="false" data-margin="0" data-mouse-drag="false" data-nav-custom=".owl-carousel-outer-navigation">
                    {/* <!-- Game Result Classic-->
                    
                    <!-- Game Result Classic-->
                    
                    <!-- Game Result Classic--> */}
                    
                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s; width: 1110px"}}>
                    <div className="owl-item active" style={{width: "369.984px"}}><article className="game-result game-result-classic">
                      <div className="game-result-main">
                        <div className="game-result-team game-result-team-first">
                          <figure className="game-result-team-figure game-result-team-figure-big">
                            <img src={atletico} alt="" width="55" height="55"/>
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
                          <figure className="game-result-team-figure game-result-team-figure-big"><img src={madrid} alt="" width="41" height="59"/>
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
                    </article></div><div className="owl-item" style={{width: "369.984px"}}><article className="game-result game-result-classic">
                      <div className="game-result-main">
                        <div className="game-result-team game-result-team-first">
                          <figure className="game-result-team-figure game-result-team-figure-big"><img src={bavaria} alt="" width="56" height="52"/>
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
                          <figure className="game-result-team-figure game-result-team-figure-big"><img src={atletico} alt="" width="55" height="55"/>
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
                    </article></div><div className="owl-item" style={{width: "369.984px"}}><article className="game-result game-result-classic">
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
                          <figure className="game-result-team-figure game-result-team-figure-big"><img src={sevilla} alt="" width="57" height="46"/>
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
                    </article></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev disabled"></button><button type="button" role="presentation" className="owl-next"></button></div><div className="owl-dots disabled"></div></div>
                </div>
                <div className="col-md-6 col-lg-12">
                  {/* <!-- Heading Component--> */}
                  <article className="heading-component">
                    <div className="heading-component-inner">
                      <h5 className="heading-component-title">Follow Us
                      </h5>
                    </div>
                  </article>

                  {/* <!-- Buttons Media--> */}
                  <div className="group-sm group-flex"><a className="button-media button-media-facebook" href="#">
                      <h4 className="button-media-title">50k</h4>
                      <p className="button-media-action">Like<span className="icon material-icons-add_circle_outline icon-sm"></span></p><span className="button-media-icon fa-facebook"></span></a><a className="button-media button-media-twitter" href="#">
                      <h4 className="button-media-title">120k</h4>
                      <p className="button-media-action">Follow<span className="icon material-icons-add_circle_outline icon-sm"></span></p><span className="button-media-icon fa-twitter"></span></a><a className="button-media button-media-google" href="#">
                      <h4 className="button-media-title">15k</h4>
                      <p className="button-media-action">Follow<span className="icon material-icons-add_circle_outline icon-sm"></span></p><span className="button-media-icon fa-google"></span></a><a className="button-media button-media-instagram" href="#">
                      <h4 className="button-media-title">85k</h4>
                      <p className="button-media-action">Follow<span className="icon material-icons-add_circle_outline icon-sm"></span></p><span className="button-media-icon fa-instagram"></span></a></div>
                </div>
                <div className="col-md-6 col-lg-12">
                  {/* <!-- Heading Component--> */}
                  <article className="heading-component">
                    <div className="heading-component-inner">
                      <h5 className="heading-component-title">Gallery
                      </h5>
                    </div>
                  </article>

                  <article className="gallery" data-lightgallery="group">
                    <div className="row row-10 row-narrow">
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="#"><img src={gallary_image_1} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="#"><img src={gallary_image_2} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="#"><img src={gallary_image_3} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="#"><img src={gallary_image_4} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="#"><img src={gallary_image_5} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4"><a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-soccer-6-original.jpg"><img src={gallary_image_6} alt=""/>
                          <div className="thumbnail-creative-overlay"></div></a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
           
        </>
    )
}


export default StandingsSchedule;