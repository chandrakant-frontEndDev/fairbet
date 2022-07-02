import React, { useState, useEffect } from 'react';
import userImg from "../../assets/images/user_img.png";
import wallet from "../../assets/images/wallet3.png";
import axios from 'axios';
import $ from "jquery"
// import Result from '../results/Result';

const Wallet = () => {
    const [amounts, setAmount] = useState("");
    const [amountError, setAmountError] = useState()
    const [walletAmount, setWalletAmount] = useState([])
    const [datas, setDatas] = useState([])
    const [history, setHistory] = useState([]);
    const [show, setShow]= useState(true)

    //Function to load razorpay script for the display of razorpay payment SDK.    
    var token = sessionStorage.getItem("access");
    console.log("token", token); 

    function loadRazorpayScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    // update payment
    const myData = async () => {
        try {
            const data = await axios.get("https://fairbet.herokuapp.com/get_wallet/", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const response = data.data.data.wallet_balance
            setWalletAmount(response);
        } catch (error) {
            console.log(error)
        }
    }

    // payment history

    const myHistory = async () => {
        try {
            const walhistory = await axios.get("https://fairbet.herokuapp.com/get_history/", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const hstResponse = walhistory.data.data
            console.log(hstResponse);
            setHistory(hstResponse);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        myData();
        myHistory();
    }, [walletAmount, datas]);


    //function will get called when clicked on the pay button.
    async function handleClick() {
       
       

        const res = await loadRazorpayScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. please check are you online?");
            return;
        }

        var config = {
            method: 'post',
            url: 'https://fairbet.herokuapp.com/razorPay/',
            headers: {
                'Authorization': `Bearer ${token}`,

            },
            data: {
                amount: amounts
            }
           
        };
        // creating a new order and sending order ID to backend
        const result = await axios(config);

        if (!result) {
            alert("Server error. please check are you onlin?");
            return;
        }

        // Getting the order details back
        const { merchantId = null, amount = null, currency = null, orderId = null } = result.data;
        console.log("result", result)

        const options = {

            key: merchantId,
            amount: amount,
            currency: currency,
            name: "",
            description: "Test Transaction",
            // image: { userImg },
            order_id: orderId,
            handler: function (response) {
                console.log("response.razorpay_order_id", response);
                fetch("https://fairbet.herokuapp.com/callback/", {
                    method: "POST",
                    headers: { "Content-type": "application/json", 'Authorization': `Bearer ${token}` },
                    body: JSON.stringify(response)
                }).then(data => data.json())
                    .then(result => {
                        console.log(result)
                        setDatas(result)
                        setShow(false)
                        $("#addmoney").hide();
                    })

            },
            prefill: {
                name: "Swapnil Pawar",
                email: "swapnil@example.com",
                contact: "9999999999",
                method: 'upi'
            },
            notes: {
                address: "None",
            },
            theme: {
                color: "#61dafb",
            },
            method: {
                netbanking: false,
                card: false,
                wallet: false,
                upi: true,
                paylater: false,
            },
            config: {
                display: {
                    hide: [{ method: 'paylater' }]
                }
            }

        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const handleInsert1 = (event) => {
        setAmount(event.target.value)
    }
    const handleInsert2 = (event) => {
        setAmount(event.target.value)
    }
    const handleInsert3 = (event) => {
        setAmount(event.target.value)
    }
    const handleInsert4 = (event) => {
        setAmount(event.target.value)
    }
    const handleInsert5 = (event) => {
        setAmount(event.target.value)
    }
    const handleInsert6 = (event) => {
        setAmount(event.target.value)
    }

    const handelChange = (e) => {
        setAmount(e.target.value)
        if (e.target.value < 500) {
            setAmountError("Min Amount INR 500 And Max Amount INR 500000!")
        } else {
            setAmountError("")
        }
    }

    return (
        <>
            <section className='wallet_wrap'>
                <div className='container-fluid'>
                    <figure className='user_img'>
                        <img src={userImg} alt='User Img' />
                        <p>Sudhanshu</p>
                    </figure>
                    <div className='wallet_amount'>
                        <div className="amount-box">
                            <div className='wallet_header'>
                                <img src={wallet} alt="wallet" />
                                <button type='button' className='btn wallet_hstry'  data-toggle="modal" data-target=".bd-example-modal-lg" data-backdrop="static" data-keyboard="false">Wallet Transaction</button>
                            </div>
                            <div className='amount_details_wrap'>
                                <div className='amount_details'>
                                    <p>Total Balance</p>
                                    <p className="amount">₹ {walletAmount}</p>
                                </div>
                                <div className='amount_details'>
                                    <p>Available Withdrawal</p>
                                    <p className="amount">₹ 0</p>
                                </div>
                            </div>
                        </div>
                        <div className="btn-group text-center">
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#addmoney" data-backdrop="static" data-keyboard="false">Add Money  <span className="fa fa-plus" aria-hidden="true"></span> </button>
                            <button type="button" className="btn btn-outline-light">Widthdraw  <span className="fa fa-minus" aria-hidden="true"></span> </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div className='amount_proceed_wrap'>
                    <div className={show === true ?  "modal fade show" : "modal fade"}    id="addmoney" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Add Money </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputNumber">Amount *</label>
                                        <input type="number" className="form-control" id="exampleInputNumber" placeholder="Amount" name='amount' onChange={handelChange} value={amounts} />
                                        <small style={{ color: "red" }}>{amountError}</small>
                                    </div>
                                    <div className='add_money_wrap'>
                                        <button type='button' className='btn add_money' onClick={handleInsert1} value="500">+500</button>
                                        <button type='button' className='btn add_money' onClick={handleInsert2} value="1000">+1000</button>
                                        <button type='button' className='btn add_money' onClick={handleInsert3} value="2000">+2000</button>
                                        <button type='button' className='btn add_money' onClick={handleInsert4} value="4000">+4000</button>
                                        <button type='button' className='btn add_money' onClick={handleInsert5} value="5000">+5000</button>
                                        <button type='button' className='btn add_money' onClick={handleInsert6} value="6000">+6000</button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={handleClick}>Proceed To Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* History Modal */}
                <div className='history_modal_wrap'>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Wallet History</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className='wallet_table'>
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Date/Time</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                history.map((ele) => {
                                                    return (
                                                        <tr key={ele.id}>
                                                            <td>{ele.id}</td>
                                                            <td>{ele.provider_order_id}</td>
                                                            <td>{ele.status}</td>
                                                            <td>{ele.created}</td>
                                                            <td>{ele.amount}</td>

                                                        </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wallet