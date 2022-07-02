import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsInfoCircleFill } from 'react-icons/bs'
const OpenBets = (props) => {

    // ============================================= BetSlip Stake ==================================================
    const [betSlipStakeVal, setBetSlipStakeVal] = useState(0);
    const betSlipStake_Ref = useRef(null);
    // =========================================== oddsInputValue ==================================================
    const [oddsIncrementCount, setOddsIncrementCount] = useState(0)

    useEffect(() => {
        let xyz = parseFloat(props.layoddsattr);
        setOddsIncrementCount(xyz)
    }, [props.layoddsattr])

    useEffect(() => {
        let abc = parseFloat(props.backoddsattr);
        setOddsIncrementCount(abc)
    }, [props.backoddsattr])




    const oddsBackRef = useRef(null)
    function oddsIncrement() {
        let oddsInputValue = parseInt(oddsBackRef.current.value);
        setOddsIncrementCount(oddsInputValue + 1)
    }
    function oddsDecrement() {
        let oddsInputValue = parseInt(oddsBackRef.current.value);
        if (oddsInputValue > 0) {
            setOddsIncrementCount(oddsInputValue - 1)
        } else { }
    }
    function oddsChangedValue(e) {
        let eCode = e.target.value;
        console.log(eCode);
        if (eCode === '') {
        } else {
            setOddsIncrementCount((e.target.value.replace(/\D/g, '')))
        }
    }
    // =========================================== BetSlipStake Function ==================================================
    function betSlipStake_change(e) {
        let eCode = e.target.value;
        if (eCode === '') {
        } else {
            setBetSlipStakeVal((e.target.value.replace(/\D/g, '')))
        }
        console.log("dsfjh");
    }

    function addStakeCount(e) {
        let StakeCountVal = parseInt(e.target.value);
        let StakeCountCurrentVal = parseInt(betSlipStakeVal);
        setBetSlipStakeVal(StakeCountCurrentVal + StakeCountVal)
        console.log(betSlipStake_Ref.current.value);
    }
    return (
        <>
            <div className='col-md-4'>
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
                                    <p>{props.matchnameattr}</p>
                                    <p>{props.teamattr} default</p>
                                </div>
                                <div className='bet_and_money'>
                                    <form>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputOdds">Odds</label>
                                                    <button type='button' className='btn increment' onClick={oddsIncrement}>+</button>
                                                    <input type="number" className="form-control betting" id="exampleInputOdds" aria-describedby="oddsHelp" ref={oddsBackRef} placeholder="Odds" min="100" onChange={oddsChangedValue} value={oddsIncrementCount} />
                                                    <button type='button' className='btn decrement' onClick={oddsDecrement}>-</button>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputMoney">Stake</label>
                                                    <input type="number" className="form-control" id="exampleInputMoney" aria-describedby="moneyHelp" placeholder="Stake" min="0" ref={betSlipStake_Ref} onChange={betSlipStake_change} value={betSlipStakeVal} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='add_money_wrap'>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="500" onClick={addStakeCount}>+500</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="1000" onClick={addStakeCount}>+1000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="2000" onClick={addStakeCount}>+2000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="4000" onClick={addStakeCount}>+4000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="5000" onClick={addStakeCount}>+5000</button>
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' className='btn add_money bet_money' value="6000" onClick={addStakeCount}>+6000</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='betting_btns'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <button type='button' className='btn cancel_btn'>CANCEL</button>
                                            </div>
                                            <div className='col-6'>
                                                <button type='button' className='btn place_btn'>
                                                    <span className='placeBet_text'>PLACE BET</span>
                                                    <span className='profit_liability'>Profit:1000</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bat_info'>
                                        <span className='bat_info_icon'><BsInfoCircleFill /></span>
                                        <span className='bat_info_para'>Min Bet: 100 Max Bet: 100000 Max Winning: 100000</span>
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