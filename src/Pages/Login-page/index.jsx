import React, { useState } from "react";
import Boom from "../../assets/images/boomlogo.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Input from "../../components/InputField/index";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e, fieldName) => {
    const value = e.target.value || '';
    setFormData({ ...formData, [fieldName]: value });
    setErrors({ ...errors, [fieldName]: '' });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.username) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {

      console.log('Form is valid. Ready for login.');

    }
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
              value={formData.username}
              onChange={(e) => handleChange(e, "username")}
            />
            {errors.username && <div className="text-danger mt-2">{errors.username}</div>}
          </div>
          <div className="textfield mt-4">
            <label className="form-label">Password</label>
            <Input
              type="password"
              placeholder="Enter"
              className="form-control"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
            />
            {errors.password && <div className="text-danger mt-2">{errors.password}</div>}
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
