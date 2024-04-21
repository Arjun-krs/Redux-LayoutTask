import React, { useState } from "react";
import Boom from "../../../assets/images/boomlogo.svg";
import "../Signup-page/style.scss";
import Input from "../../InputField/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../Redux/Action/index";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        LegalName: "",
        UserName: "",
        Email: "",
        PhoneNumber: "",
        Password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(formData)) // Dispatch update action
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    }


    const handleChange = (e, fieldName) => {
        const value = e.target.value || '';
        const updatedFormData = { ...formData, [fieldName]: value };
        setFormData(updatedFormData);
    };

    const handleNavigation = () => {
        navigate("/");
    };


    return (
        <div className="login-background">
            <div className="boom-logo text-center">
                <img
                    src={Boom}
                    className="mt-4"
                    alt="logo"
                    width={174}
                    height={40}
                />
            </div>
            <div className="login">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Merchant Registration</h2>
                    <h5>Enter your account details</h5>
                    <div className="textfield mt-4">
                        <label className="form-label">Business Legal Name</label>
                        <Input
                            type="text"
                            name="LegalName"
                            placeholder="Enter"
                            className="form-control"
                            onChange={(e) => handleChange(e, "LegalName")}
                        />
                    </div>
                    <div className="textfield mt-3">
                        <label className="form-label">User Handle</label>
                        <Input
                            type="text"
                            name="UserName"
                            placeholder="Enter"
                            className="form-control"
                            onChange={(e) => handleChange(e, "UserName")}
                        />
                    </div>
                    <div className="textfield mt-3">
                        <label className="form-label">E-mail Address</label>
                        <Input
                            type="email"
                            name="Email"
                            placeholder="Enter"
                            className="form-control"
                            onChange={(e) => handleChange(e, "Email")}
                        />
                    </div>
                    <div className="textfield mt-3">
                        <label className="form-label">Phone Number</label>
                        <Input
                            type="text"
                            name="PhoneNumber"
                            placeholder="Enter"
                            className="form-control"
                            onChange={(e) => handleChange(e, "PhoneNumber")}
                        />
                    </div>
                    <div className="textfield mt-3">
                        <label className="form-label">Password</label>
                        <Input
                            type="password"
                            name="Password"
                            placeholder="Enter"
                            className="form-control"
                            onChange={(e) => handleChange(e, "Password")}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning col-12 mt-4 text-white">Register</button>
                </form>
                <p>Already have an account? <a href="#" onClick={handleNavigation}>Login Now</a> </p>
                <p>By creating an account, you agree the <a href="#">Terms and conditions</a></p>
            </div>
        </div>
    );
}

export default Signup;
