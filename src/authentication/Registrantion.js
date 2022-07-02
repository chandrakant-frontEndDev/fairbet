import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registrantion = () => {
    const [value, setValue] = useState([]);
    const [input, setInput] = useState({
        email: "",
        password: "",
        password2: "",
        number: "",
        birth_date: "",
        gender: "",
        source: "",
        username: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpasswordError, setCpasswordError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [birthDateError, setBirthDateError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [sourceError, setSourceError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const navigate = useNavigate();

    // const mydata = async () => {
    //     try {
    //         const data = await Axios.get("https://jsonplaceholder.typicode.com/users");
    //         const response = data.data
    //         setValue(response);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     mydata()
    // }, []);

    const handelChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log("change", input.gender)
    }
    const handelClick = (event) => {
        event.preventDefault();

        // email
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!input.email) {
            setEmailError("Email is required")
        } else if (!input.email.match(mailformat)) {
            setEmailError("Please enter your valid email")
        } else {
            setEmailError("")
        }

        // DOB
        if (!input.birth_date) {
            setBirthDateError("DOB is required")
        }
        else {
            setBirthDateError("")
        }

        // password
        var passwordFormat = "^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$"
        if (!input.password) {
            setPasswordError("Password is required")
        }
        else if (input.password.length < 6) {
            setPasswordError("Password must be longer than 6 characters")
        } else if (input.password.match(passwordFormat)) {
            setPasswordError("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        }
        else {
            setPasswordError("")
        }

        // cpassword

        if (!input.password2) {
            setCpasswordError("Repeat password is required")
            console.log("not pass")
        } else if (input.password2 !== input.password) {
            setCpasswordError("Password does not match confirmation password")
            console.log("not match", input.password2, input.password);
        }
        else {
            setCpasswordError("")
            console.log("blank");
        }

        // Name
        if (!input.username) {
            setUserNameError("Name is required")
        }
        else {
            setUserNameError("")
        }

        // Number
        if (input.number.length < 10) {
            setNumberError("Please enter valid number")
        } else {
            setNumberError("")
        }
        if (!input.number) {
            setNumberError("Number is required")
        } else {
            setNumberError("")
        }

        // Gender
        if (input.gender === "") {
            setGenderError("Gender is required")
        } else {
            setGenderError("");
        }

        // Source    
        if (input.source === "") {
            setSourceError("Source is required")
        } else {
            setSourceError("");
        }
        Axios.post("https://fairbet.herokuapp.com/api-auth/register/", {
            email: input.email,
            password: input.password,
            password2: input.password2,
            mobile_number: input.number,
            birth_date: input.birth_date,
            gender: input.gender,
            source: input.source,
            username: input.username
       
        }).then(res => {
            navigate("/", { replace: true });
            console.log("posting data", res)
        }).catch(err => console.log("posting err", err))
        console.log("input.gender", input.gender)
    }
    return (
        <>
            <HeroBanner auth="REGISTER PAGE" />
            <section className="section section-variant-1 bg-gray-100">
                <div className="container">
                    <div className="row row-50 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-6">
                            <div className="card-login-register" id="card-l-r">
                                <div className="card-top-panel card-top-register">
                                    <div className="card-top-panel-left">

                                        <h5 className="card-title card-title-register">Register</h5>
                                    </div>

                                </div>

                                <div className="card-form card-form-register">
                                    <form className="rd-form rd-mailform" data-form-output="form-output-global" id="myform" data-form-type="contact" onSubmit={handelClick}>
                                        <div className="form-wrap">
                                            <label className="form-label rd-input-label" htmlFor="form-register-email">E-mail</label>
                                            <input className="form-input form-control-has-validation form-control-last-child" id="form-register-email" type="email" name="email" onChange={handelChange} value={input.email} data-constraints="@Email @Required" />
                                            <span className="form-validation">{emailError}</span>
                                        </div>
                                        <div className="form-wrap">
                                            <label className="form-label rd-input-label" htmlFor="form-login-name-2">Name</label>
                                            <input className="form-input form-control-has-validation form-control-last-child" id="form-login-name-2" type="text" name="username" onChange={handelChange} value={input.username} data-constraints="@Required" />
                                            <span className="form-validation">{userNameError}</span>
                                        </div>
                                        <div className="register_number_field">
                                            <div className="form-wrap">
                                                <label className="form-label rd-input-label" htmlFor="form-login-number">Number</label>
                                                <input className="form-input form-control-has-validation form-control-last-child" id="form-login-number" type="number" name="number" onChange={handelChange} value={input.number} data-constraints="@Numeric @Required" />
                                                <span className="form-validation">{numberError}</span>
                                            </div>
                                        </div>
                                        <div className="form-wrap">
                                            <label className="form-label rd-input-label" htmlFor="form-login-date">DOB</label>
                                            <input className="form-input form-control-has-validation form-control-last-child" id="form-login-date" type="date" name="birth_date" onChange={handelChange} value={input.birth_date} data-constraints="@Required" />
                                            <span className="form-validation">{birthDateError}</span>
                                        </div>
                                        <div className="form-wrap">
                                            <label className="form-label rd-input-label" htmlFor="form-login-password-2">Password</label>
                                            <input className="form-input form-control-has-validation form-control-last-child" id="form-login-password-2" type="password" name="password" onChange={handelChange} value={input.password} data-constraints="@Required" />
                                            <span className="form-validation">{passwordError}</span>
                                        </div>
                                        <div className="form-wrap">
                                            <label className="form-label rd-input-label" htmlFor="form-login-password-3">Repeat Password</label>
                                            <input className="form-input form-control-has-validation form-control-last-child" id="form-login-password-3" type="password" name="password2" onChange={handelChange} value={input.password2} data-constraints="@Required" />
                                            <span className="form-validation">{cpasswordError}</span>
                                        </div>
                                        <div className="my-3 select_gender">
                                            <div className="form-wrap ">
                                                <select className="form-select form-input form-control-has-validation form-control-last-child" aria-label="Default select example" defaultValue={"default"}  name="gender" onChange={handelChange} >
                                                    <option value={"default"} disabled>
                                                        Gender
                                                    </option>
                                                    <option value={"Male"}>Male</option>
                                                    <option value={"Female"}>Female</option>
                                                </select>
                                                <span className="form-validation">{genderError}</span>
                                            </div>
                                        </div>
                                        <div className="my-3 select_source">
                                            <div className="form-wrap">
                                                <select className="form-select form-input form-control-has-validation form-control-last-child" aria-label="Default select example" name='source' defaultValue={"default"} onChange={handelChange}>
                                                    <option value={"default"} disabled>Source</option>
                                                    <option value={"OTT"}>OTT</option>
                                                    <option value={"TV"}>TV</option>
                                                </select>
                                                <span className="form-validation">{sourceError}</span>
                                            </div>
                                        </div>
                                        <button className="button button-lg button-primary button-block" id="register_btn" type="submit">Create new account</button>
                                    </form>
                                    <div className="form_details">
                                        <NavLink to="/login">Already have an account? </NavLink>
                                    </div>
                                    <div className="group-sm group-sm-justify group-middle">
                                        <a className="button button-google button-icon button-icon-left button-round" href="#">
                                            <span className="icon fa fa-google-plus"></span>
                                            <span>Google+</span>
                                        </a>
                                        <a className="button button-twitter button-icon button-icon-left button-round" href="#">
                                            <span className="icon fa fa-twitter"></span>
                                            <span>Twitter</span>
                                        </a>
                                        <a className="button button-facebook button-icon button-icon-left button-round" href="#">
                                            <span className="icon fa fa-facebook"></span>
                                            <span>Facebook</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registrantion;