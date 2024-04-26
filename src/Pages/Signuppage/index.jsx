import React, { useState } from "react";
import Boom from "../../../src/assets/images/boomlogo.svg";
import "./style.scss";
import Input from "../../components/InputField/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupAction } from "../../Redux/Action/auth";
import { Icon } from 'react-icons-kit';
import PhoneNumberList from "../../components/CountryPhone/index";
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form state
    const [business_legal_name, setBusiness_legal_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState({
        country_code: '',
        number: ''
    });
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // Password visibility state
    const [type, setType] = useState('Password');
    const [icon, setIcon] = useState(eyeOff);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const dataObject = {
                username: username,
                password: password,
                phone_number: phone_number,
                email: email,
                business_legal_name: business_legal_name
            };


            dispatch(signupAction(dataObject))
                .then(() => {
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error registering:", error);
                });
        }
    };


    const handlePhoneNumberChange = (value) => {
        const { country_code, number } = value;
        setPhone_number({
            country_code: country_code,
            number: number.replace(/[^A-Z0-9]+/ig, "")
            
        });
    };

    const validate = () => {
        let validationErrors = {};

        // Validate Business Legal Name
        if (!business_legal_name) {
            validationErrors.business_legal_name = 'Business Legal Name is required';
        }

        // Validate Username
        if (!username) {
            validationErrors.username = 'User Handle is required';
        }

        // Validate Email
        if (!email) {
            validationErrors.email = 'E-mail Address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid E-mail Address';
        }

        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 8) {
            validationErrors.password = 'Password should be at least 8 characters';
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
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
                            name="business_legal_name"
                            placeholder="Enter"
                            className="form-control"
                            value={business_legal_name}
                            onChange={(e) => setBusiness_legal_name(e.target.value)}
                        />
                        {errors.business_legal_name && <div className="text-danger">{errors.business_legal_name}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">User Handle</label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Enter"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <div className="text-danger">{errors.username}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">E-mail Address</label>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Enter"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">Phone Number</label>
                        <PhoneNumberList onPhoneNumberChange={handlePhoneNumberChange} />
                        {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
                    </div>

                    <div className="textfield mt-3 position-relative">
                        <label className="form-label">Password</label>
                        <Input
                            type={type}
                            name="Password"
                            placeholder="Enter"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="eye-icon" onClick={handleToggle}>
                            <Icon className="eye-icon" icon={icon} size={16} />
                        </button>
                        {errors.password && <div className="text-danger">{errors.password}</div>}
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
