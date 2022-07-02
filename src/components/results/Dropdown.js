import React from 'react';

const Dropdown = () => {
    return (
        <>
            <div className="container">
                <div className="row row-15">
                    <div className="col-md-4">
                        <div className="select2-container select select-sport-result" id="s2id_autogen3" style={{minWidth: "124px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">
                                <span className="select2-chosen" id="select2-chosen-4">Last 24 hours</span>
                                <abbr className="select2-search-choice-close"></abbr>
                                <span className="select2-arrow" role="presentation"><b role="presentation"></b></span>
                            </a>

                            <label htmlFor="s2id_autogen4" className="select2-offscreen"></label>
                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4" />

                            <div className="select2-drop select2-display-none select-sport-result-dropdown">   <div className="select2-search select2-search-hidden select2-offscreen">
                                <label htmlFor="s2id_autogen4_search" className="select2-offscreen"></label>
                                <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder="" />
                            </div>
                                <ul className="select2-results" role="listbox" id="select2-results-4">
                                </ul>
                            </div>
                        </div>

                        <select className="select select-sport-result" data-placeholder="Last 24 hours" data-dropdown-classname="select-sport-result-dropdown" style={{minWidth: "124px", display:"none"}} tabIndex="-1" title="">
                            <option value="last 24 hours" >Last 24 hours</option>
                            <option value="last 12 hours">Last 12 hours</option>
                            <option value="last 6 hours">Last 6 hours</option>
                            <option value="last 3 hours">Last 3 hours</option>
                            <option value="last 1 hour">Last 1 hour</option>
                        </select>

                    </div>
                    <div className="col-md-4">
                        <div className="select2-container select select-sport-result" id="s2id_autogen5" style={{minWidth: "124px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">
                                <span className="select2-chosen" id="select2-chosen-6">All sports</span>
                                <abbr className="select2-search-choice-close"></abbr>
                                <span className="select2-arrow" role="presentation"><b role="presentation"></b>
                                </span>
                            </a>

                            <label htmlFor="s2id_autogen6" className="select2-offscreen"></label>
                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-6" id="s2id_autogen6" />

                            <div className="select2-drop select2-display-none select-sport-result-dropdown">
                                <div className="select2-search select2-search-hidden select2-offscreen">
                                    <label htmlFor="s2id_autogen6_search" className="select2-offscreen"></label>
                                    <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-6" id="s2id_autogen6_search" placeholder="" />
                                </div>
                                <ul className="select2-results" role="listbox" id="select2-results-6">
                                </ul>
                            </div>

                        </div>

                        <select className="select select-sport-result" data-placeholder="Please select a sport" data-dropdown-classname="select-sport-result-dropdown" style={{minWidth: "124px", display:"none"}} tabIndex="-1" title="">
                            <option value="all sports" >All sports</option>
                            <option value="football">Football</option>
                            <option value="tennis">Tennis</option>
                            <option value="basketball">Basketball</option>
                            <option value="ice-hockey">Ice Hockey</option>
                            <option value="volleyball">Volleyball</option>
                            <option value="badminton">Badminton</option>
                            <option value="baseball">Baseball</option>
                            <option value="table-tennis">Table Tennis</option>
                            <option value="slot games">Slot Games</option>
                        </select>

                    </div>
                    <div className="col-md-4">
                        <div className="select2-container select select-sport-result" id="s2id_autogen7" style={{minWidth: "124px"}}>
                            <a href="#" className="select2-choice" tabIndex="-1">
                                <span className="select2-chosen" id="select2-chosen-8">National Championship</span>
                                <abbr className="select2-search-choice-close"></abbr>   <span className="select2-arrow" role="presentation"><b role="presentation"></b>
                                </span>
                            </a>

                            <label htmlFor="s2id_autogen8" className="select2-offscreen"></label>
                            <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-8" id="s2id_autogen8" />

                            <div className="select2-drop select2-display-none select-sport-result-dropdown">   <div className="select2-search select2-search-hidden select2-offscreen">
                                <label htmlFor="s2id_autogen8_search" className="select2-offscreen"></label>
                                <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder="" />
                            </div>
                                <ul className="select2-results" role="listbox" id="select2-results-8">
                                </ul>
                            </div>
                        </div>

                        <select className="select select-sport-result" data-placeholder="Please select a league" data-dropdown-classname="select-sport-result-dropdown" style={{minWidth: "124px", display:"none"}} tabIndex="-1" title="">
                            <option value="the-championship">National Championship</option>
                            <option value="league-one">US International</option>
                            <option value="league-two">NBA Finals</option>
                            <option value="league-three">National Hockey League</option>
                            <option value="league-four">World Championship</option>
                        </select>

                    </div>
                </div>
            </div>
        </>
    )
}



export default Dropdown;