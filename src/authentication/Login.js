import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [value, setValue] = useState([]);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  // const mydata = async () => {
  //   try {
  //     const data = await Axios.get("https://jsonplaceholder.typicode.com/users");
  //     const response = data.data
  //     setValue(response);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   mydata()
  // }, []);

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handelClick = (event) => {
    event.preventDefault();
    if (!input.name) {
      setNameError("Name is Required")
    } else {
      setNameError("")
    }
    if (!input.password) {
      setPasswordError("Password is Required")
    } else {
      setPasswordError("")
    }
    if (input.name !== "" && input.password !== "") {
      Axios.post("https://fairbet.herokuapp.com/api-auth/login/", {
        username: input.name,
        password: input.password,
      }).then(res => {
        console.log("posting data", res)
        var access = res.data.access;
        var refresh = res.data.refresh
        sessionStorage.setItem("access", access);
        sessionStorage.setItem("refresh", refresh);
        navigate("/", { replace: true });
      }).catch(err => console.log("posting err", err))
    }
  }

  return (
    <>
      <HeroBanner auth="Login Page" />
      <section className="section section-variant-1 bg-gray-100">
        <div className="container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card-login-register" id="card-l-r">
                <div className="card-top-panel">
                  <div className="card-top-panel-left">
                    <h5 className="card-title card-title-login">Login</h5>
                  </div>
                </div>
                <div className="card-form card-form-login">
                  <form className="rd-form rd-mailform" onSubmit={handelClick}>
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-login-name-1">Name</label>
                      <input className="form-input form-control-has-validation form-control-last-child" id="form-login-name-1" type="text" name="name" data-constraints="@Required" onChange={handelChange} value={input.name} />
                      <span className="form-validation">{nameError}</span>
                    </div>
                    <div className="form-wrap">
                      <label className="form-label rd-input-label" htmlFor="form-login-password-1">Password</label>
                      <input className="form-input form-control-has-validation form-control-last-child" id="form-login-password-1" type="password" name="password" data-constraints="@Required" onChange={handelChange} value={input.password} />
                      <span className="form-validation">{passwordError}</span>
                    </div>

                    <button className="button button-lg button-primary button-block" id="login_btn" type="submit">Sign in</button>
                  </form>
                  <div className="form_details">
                    <a href="#">Forgotten account? </a>
                    <NavLink to="/register">· Sign up </NavLink>
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

export default Login;