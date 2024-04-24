import React, { useState } from "react";
import Boom from "../../../src/assets/images/boomlogo.svg";
import "./style.scss";
import Input from "../../components/InputField/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Action/index";
import { Icon } from 'react-icons-kit';
import PhoneNumberList from "../../components/CountryPhone/index"
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form state
    const [LegalName, setLegalName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Password, setPassword] = useState("");

    // Password visibility state
    const [type, setType] = useState('Password');
    const [icon, setIcon] = useState(eyeOff);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            LegalName,
            UserName,
            Email,
            PhoneNumber,
            Password,
        };
        dispatch(loginAction(formData))
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    }

    const handleToggle = () => {
        if (type === 'Password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('Password');
        }
    }

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
                            value={LegalName}
                            onChange={(e) => setLegalName(e.target.value)}
                        />
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">User Handle</label>
                        <Input
                            type="text"
                            name="UserName"
                            placeholder="Enter"
                            className="form-control"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}

                        />
                    </div>
                    <div className="textfield mt-3">
                        <label className="form-label">E-mail Address</label>
                        <Input
                            type="email"
                            name="Email"
                            placeholder="Enter"
                            className="form-control"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <div className="textfield mt-3">
                        <label className="form-label">Phone Number</label>
                        <Input
                            type="text"
                            name="PhoneNumber"
                            placeholder="Enter"
                            className="form-control"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}

                        />
                    </div> */}
                    <div className="textfield mt-3">
                        <label className="form-label">Phone Number</label>
                        <PhoneNumberList />
                    </div>



                    <div className="textfield mt-3 position-relative">
                        <label className="form-label">Password</label>
                        <Input
                            type={type}
                            name="Password"
                            placeholder="Enter"
                            className="form-control"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon position-absolute" onClick={handleToggle}>
                            <Icon className="eye-icon" icon={icon} size={16} />
                        </span>
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
