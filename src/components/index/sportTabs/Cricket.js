import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import OpenBets from './OpenBets';
import SideBar from './SideBar';
import TabNav from './TabNav';
const Cricket = () => {
    // console.log("cricket ---- pills-slip-tab");
    const betSlipBtn = useRef(null)
    function oddsButton() {
        betSlipBtn.current.click()
    }


    const [dummyOddsData, setDummyOddsData] = useState('')
    // var dummyOddsDataArray = new Array();

    async function dummyOdds() {
        const url = await axios.get('https://fairbet.herokuapp.com/get_random_odds/');
        // console.log(url.data.response);
        // dummyOddsDataArray.push(url.data.response)
        setDummyOddsData(url.data.response);
        //  console.log(await dummyOddsData[0].team1Back);
    }

    useEffect(() => {

        setInterval(()=>{
            dummyOdds();
        },1000)
    }, [])



    // const [teamName, setTeamName] = useState('')
    // const [opponentTeam, setopponentTeam] = useState('')
    // const [OverNumber, setOverNumber] = useState('')
    // const [Back, setBack] = useState('')
    // const [Lay, setLay] = useState('')
    // useEffect(() => {
    //     let socket = new WebSocket("ws://148.251.21.118:5570");

    //     socket.onopen = function (e) {
    //         alert("[open] Connection established");
    //         // alert("Sending to server");
    //         // socket.send("My name is John");
    //     };

    //     socket.onmessage = function (event) {
    //         // alert(`[message] Data received from server: ${event.data}`);
    //         let mydata = JSON.parse(event.data);
    //         console.log('event.data', mydata);

    //         if(mydata.responseType == 9){
    //             // console.log(mydata.data);
    //             if(mydata.data.MatchId == 'p10040'){
    //                 console.log(mydata.data.Back);
    //                 setBack(mydata.data.Back)
    //                 setLay(mydata.data.Lay)
    //             }
    //         }

    //         if (mydata.data.MatchId == 'p10040') {
    //             // console.log(mydata);
    //             // console.log(mydata.data);
    //             // console.log(LayRate);
    //         }

    //         if (mydata.data.MatchId == 'p10031') {
    //             // console.log(mydata.data);
    //             // console.log(mydata.data.T1);
    //             // console.log(mydata.data.T2);
    //             setOverNumber(mydata.data.OverNo)
    //             setopponentTeam(mydata.data.T2)
    //             setTeamName(mydata.data.T1)
    //         }
    //         // console.log('event.data', JSON.parse(event.data.lay));
    //         // console.log('event.data', event.data);
    //     };

    //     socket.onclose = function (event) {
    //         if (event.wasClean) {
    //             alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    //         } else {
    //             // e.g. server process killed or network down
    //             // event.code is usually 1006 in this case
    //             alert('[close] Connection died');
    //         }
    //     };

    //     socket.onerror = function (error) {
    //         alert(`[error] ${error.message}`);
    //     };

    // }, [])
    return (
        <>
            <div className='filter_data bg-gray-100'>
                <div className='container-fluid'>
                    <div className='row'>
                        <SideBar />
                        {/* <!-- Cricket--> */}
                        <div className='col-md-6 '>
                            <div className="isotope-item" data-filter="cricket">
                                <TabNav />
                                {/* <!-- Heading Component--> */}
                                <article className="heading-component">
                                    <div className="heading-component-inner">
                                        <h5 className="heading-component-title">Cricket</h5>
                                        <div className='tab_nav'>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">LIVE &amp; UPCOMING</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">LEAGUES</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">RESULT</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>

                                {/* <!-- Live and upcoming page --> */}
                                <div className="match_wrap">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="team_wrap">
                                                <div className="team_live_name">
                                                    <p>Sri Lanka </p> <span>V</span> <p>Australia</p>
                                                    <div className="team_time">
                                                        <p>Tomorrow at 2:30 PM</p>
                                                        {/* <p>Current Over : {OverNumber}</p> */}
                                                    </div>
                                                </div>
                                                <div className="match_status">
                                                    <p>upcoming</p>
                                                </div>
                                            </div>
                                            <div className="team_table">
                                                <div className="team_name">
                                                    <div className="team_name_wrap">
                                                        {/* <p>{teamName}</p> */}
                                                        <p>SriLanka</p>
                                                    </div>
                                                    <div className="team_score">
                                                        <div className="score_wrap">
                                                            <p>Back</p>
                                                            <p>Lay</p>
                                                        </div>
                                                        <div className="score_about">
                                                            <button className='back_button' onClick={oddsButton}>
                                                                {/* <span className='back_odds'>{Back}</span> */}
                                                                <span className='back_odds'>{dummyOddsData.team1Back}</span>
                                                                <span className='back_audience'>4,455,420</span>
                                                            </button>
                                                            <button className='lay_button' onClick={oddsButton}>
                                                                {/* <span className='lay_odds'>{Lay}</span> */}
                                                                <span className='lay_odds'>{dummyOddsData.team1Lay}</span>
                                                                <span className='lay_audience'>4,455,420</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_name">
                                                    <div className="team_name_wrap">
                                                        {/* <p>{opponentTeam}</p> */}
                                                        <p>India</p>
                                                    </div>
                                                    <div className="team_score">
                                                        <div className="score_wrap">
                                                            <p>Back</p>
                                                            <p>Lay</p>
                                                        </div>
                                                        <div className="score_about">
                                                            <button className='back_button' onClick={oddsButton}>
                                                                <span className='back_odds'>{dummyOddsData.team2Back}</span>
                                                                <span className='back_audience'>4,455,420</span>
                                                            </button>
                                                            <button className='lay_button' onClick={oddsButton}>
                                                                <span className='lay_odds'>{dummyOddsData.team2Lay}</span>
                                                                <span className='lay_audience'>4,455,420</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <ul className="leagues_details">
                                                <li><a href="#">One Day Internationals</a></li>
                                                <li><a href="#">Test Matches</a></li>
                                                <li><a href="#">Indian Premier League</a></li>
                                                <li><a href="#">ICC Women's World Cup</a></li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
                                    </div>
                                </div>
                                {/* <!-- // Live and upcoming page --> */}
                            </div>
                        </div>
                        <OpenBets betSlipBtn={betSlipBtn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cricket