import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../Action/index";
import Input from "../InputField/index";
import Button from "../Button/index";
import "../../App.css";

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isUpdate, isView } = location.state || {};

    const [formData, setFormData] = useState({
        CustomerName: "",
        CustomerEmail: "",
        CustomerContact: "",
        FirstName: "",
        LastName: "",
        AlternateContact: "",
        AddresslineOne: "",
        AddresslineTwo: "",
        Country: "",
        State: "",
        City: "",
        Pincode: "",
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e, fieldName) => {
        if (!isView) {
            setFormData({ ...formData, [fieldName]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(formData))
            .then(() => {
                setFormData({
                    CustomerName: "",
                    CustomerEmail: "",
                    CustomerContact: "",
                    FirstName: "",
                    LastName: "",
                    AlternateContact: "",
                    AddresslineOne: "",
                    AddresslineTwo: "",
                    Country: "",
                    State: "",
                    City: "",
                    Pincode: "",
                });
                navigate("/");
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    };

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="header-form">
                    <h2>Basic details</h2>
                    <div className="form-group">
                        <div className="textfield">
                            <label>Customer Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                value={formData.CustomerName}
                                onChange={(e) => handleChange(e, "CustomerName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label>Customer Email</label>
                            <Input
                                type="email"
                                placeholder="Enter"
                                value={formData.CustomerEmail}
                                onChange={(e) => handleChange(e, "CustomerEmail")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label>Customer Phone Number</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                value={formData.CustomerContact}
                                onChange={(e) => handleChange(e, "CustomerContact")}
                                disabled={isView}
                            />
                        </div>
                    </div>
                </div>

                <div className="footer-form">
                    <h2>Address details</h2>
                    <div className="form-grid">
                        <div className="textfield">
                            <label htmlFor="FirstName1">First Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="FirstName1"
                                value={formData.FirstName}
                                onChange={(e) => handleChange(e, "FirstName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="LastName1">Last Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="LastName1"
                                value={formData.LastName}
                                onChange={(e) => handleChange(e, "LastName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="AlternateContact1">Alternate Phone Number</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="AlternateContact1"
                                value={formData.AlternateContact}
                                onChange={(e) => handleChange(e, "AlternateContact")}
                                disabled={isView}
                            />
                        </div>

                        <div className="textfield">
                            <label htmlFor="AddresslineOne">Address Line 1</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="AddresslineOne"
                                value={formData.AddresslineOne}
                                onChange={(e) => handleChange(e, "AddresslineOne")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="AddresslineTwo">Address Line 2</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="AddresslineTwo"
                                value={formData.AddresslineTwo}
                                onChange={(e) => handleChange(e, "AddresslineTwo")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="Country">Country</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="Country"
                                value={formData.Country}
                                onChange={(e) => handleChange(e, "Country")}
                                disabled={isView}
                            />
                        </div>

                        <div className="textfield">
                            <label htmlFor="State">State</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="State"
                                value={formData.State}
                                onChange={(e) => handleChange(e, "State")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="City">City</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="City"
                                value={formData.City}
                                onChange={(e) => handleChange(e, "City")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label htmlFor="Pincode">Pincode</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="textbox"
                                id="Pincode"
                                value={formData.Pincode}
                                onChange={(e) => handleChange(e, "Pincode")}
                                disabled={isView}
                            />
                        </div>
                    </div>
                </div>

                <div className="head-wrapper">
                    <div className="footer d-flex justify-content-end" style={{ gap: 20, padding: 20 }}>
                        <button className="primary-btn" onClick={handleNavigation}>Go Back</button>
                        <button type="submit" className="secondary-btn" disabled={isView}>{isUpdate ? "Update" : "Save"}</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;
