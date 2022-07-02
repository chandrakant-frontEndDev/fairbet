import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from 'socket.io-client';

const OpenBets = (props) => {

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
    //         // console.log('event.data', mydata.data.MatchId);

    //         if(mydata.data.MatchId == 'p10031'){
    //             // console.log(mydata.data.Over);
    //             // console.log(mydata.data.T1);
    //             // console.log(mydata.data.T2);
    //             var teamOne = mydata.data.T1;
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



    const [oddsIncrementCount, setOddsIncrementCount] = useState(0)
    const oddsBackRef = useRef(null)
    // =========================================== oddsInputValue ==================================================
    function oddsIncrement() {
        let oddsInputValue = parseInt(oddsBackRef.current.value);
        setOddsIncrementCount(oddsInputValue + 1)
        // console.log('e'.charCodeAt());
    }
    function oddsDecrement() {
        let oddsInputValue = parseInt(oddsBackRef.current.value);
        if (oddsInputValue > 0) {
            setOddsIncrementCount(oddsInputValue - 1)
        } else { }
    }
    function oddsChangedValue(e) {
        let eCode = 'e'.charCodeAt();
        if (eCode === 101) {

        } else {
            setOddsIncrementCount(e.target.value)
        }
    }
    return (
        <>
            <div className='col-md-3'>
                <div className='betting_wrap'>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" >
                            <a className="nav-link" ref={props.betSlipBtn} id="pills-slip-tab" data-toggle="pill" href="#pills-slip" role="tab" aria-controls="pills-slip" aria-selected="false">Betslip</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-open-tab" data-toggle="pill" href="#pills-open" role="tab" aria-controls="pills-open" aria-selected="true">Open Bets</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade" id="pills-slip" role="tabpanel" aria-labelledby="pills-slip-tab">
                            <div className='slip_bat_wrap'>
                                <div className='slip_team_name'>
                                    <p>Sri Lanka Women v India Women</p>
                                    <p>Sri Lanka Women default</p>
                                </div>
                                <div className='bet_and_money'>
                                    <form>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputOdds">Odds</label>
                                                    <button type='button' className='btn increment' onClick={oddsIncrement}>+</button>
                                                    <input type="number" className="form-control betting" id="exampleInputOdds" aria-describedby="oddsHelp" ref={oddsBackRef} placeholder="Odds" min="0" onChange={oddsChangedValue} value={oddsIncrementCount} />
                                                    <button type='button' className='btn decrement' onClick={oddsDecrement}>-</button>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputMoney">Stake</label>
                                                    <input type="number" className="form-control" id="exampleInputMoney" aria-describedby="moneyHelp" placeholder="Stake" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='add_money_wrap'>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="500">+500</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="1000">+1000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="2000">+2000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="4000">+4000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="5000">+5000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="6000">+6000</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='betting_btns'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <button type='button' className='btn cancel_btn'>CANCEL</button>
                                            </div>
                                            <div className='col-6'>
                                                <button type='button' className='btn place_btn'>PLACE BET</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade  show active" id="pills-open" role="tabpanel" aria-labelledby="pills-open-tab">
                            <div className='collapes_card_wrap'>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header collapes_card" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" >Unmatched Bets</button>
                                                <span className="fa fa-chevron-down" aria-hidden="true"></span>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
                                                <p>No Unmatched Bets!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header collapes_card" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed">Matched Bets</button>
                                                <span className="fa fa-chevron-down" aria-hidden="true"></span>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
                                                <p>No Unmatched Bets!</p>
                                            </div>
                                        </div>
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

export default OpenBets