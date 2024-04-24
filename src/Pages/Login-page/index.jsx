import React from "react";
import Boom from "../../assets/images/boomlogo.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Input from "../../components/InputField/index";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/table');
  };

  const handleNavigation = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="boom-logo text-center">
        <img
          src={Boom}
          className="mt-4"
          alt="logo"
          width={174}
          height={40}
        />
      </div>

      <div className="login-fields mt-5">
        <div className="form">
          <h2>Merchant Login</h2>
          <h5>Enter your account details</h5>
          <div className="textfield mt-3">
            <label className="form-label">Username</label>
            <Input
              type="text"
              placeholder="Enter"
              className="form-control"
            />
          </div>
          <div className="textfield mt-4">
            <label className="form-label">Password</label>
            <Input
              type="password"
              placeholder="Enter"
              className="form-control"
            />
            <div className="pass text-end"><a href="#">Forgot Password?</a></div>
          </div>
          <div className="btn btn-warning col-12 mt-4 text-white" onClick={handleSubmit}>Login</div>
          <p>Not a Merchant yet? <a href="#" onClick={handleNavigation}>Sign up Now</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
