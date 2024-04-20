import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../Action/index";
import { updateAction } from "../Action/index";
import Input from "../InputField/index";
import "../../App.css";

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Location object to access state
    const { isUpdate, isView, user } = location.state || {}; // Destructuring state from location

    useEffect(() => {
        // Check if the component is in "Update" or "View" mode
        if (isUpdate || isView) {
            // If in "Update" or "View" mode, set the form data to the user data
            setFormData(user);
        }
    }, [isUpdate, isView, user]);


    // Initial form data state
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

    // Handle form input changes
    const handleChange = (e, fieldName) => {
        if (!isView) { // Check if view mode is enabled
            const value = e.target.value || ''; // Ensure value is not undefined or null
            const updatedFormData = { ...formData, [fieldName]: value }; // Update form data with new value
            setFormData(updatedFormData);
        }
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUpdate) {
            // Handle update
            dispatch(updateAction(formData)) // Dispatch update action
                .then(() => {
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error updating data:", error);
                });
        } else {
            // Handle save
            dispatch(loginAction(formData)) // Dispatch login action
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
        }
    };

    // Handle navigation to home page
    const handleNavigation = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="header-form">
                    <h2>Basic details</h2>
                    <div className="form-grid">
                        <div className="textfield">
                            <label className="form-label">Customer Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                value={formData.CustomerName || ''}
                                onChange={(e) => handleChange(e, "CustomerName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label">Customer Email</label>
                            <Input
                                type="email"
                                placeholder="Enter"
                                className="form-control"
                                value={formData.CustomerEmail || ''}
                                onChange={(e) => handleChange(e, "CustomerEmail")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label">Customer Phone Number</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                value={formData.CustomerContact || ''}
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
                            <label className="form-label" htmlFor="FirstName1">First Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="FirstName1"
                                value={formData.FirstName || ''}
                                onChange={(e) => handleChange(e, "FirstName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label" htmlFor="LastName1">Last Name</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="LastName1"
                                value={formData.LastName || ''}
                                onChange={(e) => handleChange(e, "LastName")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label" htmlFor="AlternateContact">Alternate Phone Number</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="AlternateContact"
                                value={formData.AlternateContact || ''}
                                onChange={(e) => handleChange(e, "AlternateContact")}
                                disabled={isView}
                            />
                        </div>

                        <div className="textfield">
                            <label className="form-label" htmlFor="AddresslineOne">Address Line 1</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="AddresslineOne"
                                value={formData.AddresslineOne || ''}
                                onChange={(e) => handleChange(e, "AddresslineOne")}
                                disabled={isView}
                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label" htmlFor="AddresslineTwo">Address Line 2</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="AddresslineTwo"
                                value={formData.AddresslineTwo || ''}
                                onChange={(e) => handleChange(e, "AddresslineTwo")}
                                disabled={isView}
                            />
                        </div>

                        <div className="textfield">
                            <label className="form-label" htmlFor="Country">Country</label>
                            <select
                                className="form-select"
                                id="Country"
                                value={formData.Country || ''}
                                onChange={(e) => handleChange(e, "Country")}
                                disabled={isView}
                            >
                                <option value="Country">Select a Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="London">London</option>
                                <option value="France">France</option>
                            </select>
                        </div>


                        <div className="textfield">
                            <label className="form-label" htmlFor="State">State</label>
                            <select
                                className="form-select"
                                id="State"
                                value={formData.State || ''}
                                onChange={(e) => handleChange(e, "State")}
                                disabled={isView}
                            >
                                <option value="State">Select a State</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Andhra pradesh">Andhra pradesh</option>
                                <option value="Karnataka">Karnataka</option>
                            </select>
                        </div>
                        <div className="textfield">
                            <label className="form-label" htmlFor="City">City</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="City"
                                value={formData.City || ''}
                                onChange={(e) => handleChange(e, "City")}
                                disabled={isView}

                            />
                        </div>
                        <div className="textfield">
                            <label className="form-label" htmlFor="Pincode">Pincode</label>
                            <Input
                                type="text"
                                placeholder="Enter"
                                className="form-control"
                                id="Pincode"
                                value={formData.Pincode || ''}
                                onChange={(e) => handleChange(e, "Pincode")}
                                disabled={isView}
                            />
                        </div>
                    </div>
                </div>
                <div className="head-wrapper">
                    <div className="footer d-flex justify-content-end" style={{ gap: 20, padding: 20 }}>
                        <button className="secondary-btn" onClick={handleNavigation}>Go Back</button>
                        <button type="submit" className="primary-btn" disabled={isView}>{isUpdate ? "Update" : "Save"}</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;
