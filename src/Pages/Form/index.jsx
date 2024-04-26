import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Action/index";
import { updateAction } from "../../Redux/Action/index";
import Input from "../../components/InputField/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CountryDropdownComponent } from "../../components/CountryDropDown/index";
import { StateDropdownComponent } from "../../components/StateDropDown/index";
import "../../App.scss";

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Location object to access state
    const { isUpdate, isView, user } = location.state || {}; // Destructuring state from location

    useEffect(() => {
        if (isUpdate || isView) {
            setFormData(user);
        }
    }, [isUpdate, isView, user]);

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
        Image: "",

    });

    const [errors, setErrors] = useState({
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
        Image: "",
    });

    const handleChange = (e, fieldName) => {
        if (!isView) {
            const value = e.target.value || '';
            const updatedFormData = { ...formData, [fieldName]: value };
            setFormData(updatedFormData);
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: ''
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.CustomerName, !formData.FirstName, !formData.LastName, !formData.AddresslineOne, !formData.AddresslineTwo, !formData.City, !formData.Pincode, !formData.Country, !formData.State) {
            newErrors.CustomerName = 'Customer Name is required';
            newErrors.FirstName = 'First Name is required';
            newErrors.LastName = 'Last Name is required';
            newErrors.AddresslineOne = 'Address Line One is required';
            newErrors.AddresslineTwo = 'Address Line Two is required';
            newErrors.City = 'City is required';
            newErrors.Pincode = 'Pincode is required';
            newErrors.Country = 'Country is required';
            newErrors.State = 'State is required';

        }

        if (!formData.CustomerEmail) {
            newErrors.CustomerEmail = 'Customer Email is required';
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.CustomerEmail)) {
                newErrors.CustomerEmail = 'Invalid email format';
            }
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.CustomerContact, formData.AlternateContact)) {
            newErrors.CustomerContact = 'Invalid phone number format';
            newErrors.AlternateContact = 'Invalid Alternate Phone number format';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (isUpdate) {
            dispatch(updateAction(formData))
                .then(() => {
                    navigate("/table");
                })
                .catch((error) => {
                    console.error("Error updating data:", error);
                });
        } else {

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
                        Image: "",
                    });
                    navigate("/table");
                })
                .catch((error) => {
                    console.error("Error logging in:", error);
                });
        }
    };

    const handleCountry = (selectedCountry) => {
        setFormData({
            ...formData,
            Country: selectedCountry
        });
    }
    const handleState = (selectedState) => {
        setFormData({
            ...formData,
            State: selectedState
        });
    };

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate("/table");
    };

    return (
        <>
            {isView && (
                <div className="display-wrapper m-4 m-5">
                    <h4>Customer <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />  Overview Of {formData.CustomerName} </h4>
                    <div className="customer mt-4">
                        <div className="general"><h2>General Details</h2></div>
                    </div>
                </div>
            )}
            {isUpdate && (
                <div className="display-wrapper m-4 m-5">
                    <h4>Customer <FontAwesomeIcon icon={faChevronRight} width={12} height={12} /> Edit Customer</h4>
                </div>
            )}
            {!isView && !isUpdate && (
                <div className="display-wrapper m-4 m-5">
                    <h4>Customer <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />  Add Customer</h4>
                </div>
            )}
            {isView && (
                <div className="profile-display d-flex" style={{ gap: "30px" }}>
                    <img src={formData.Image} alt="profile" width={75} height={75} />
                    <div className="customer-detail ">
                        <h3>{formData.CustomerName}</h3>
                        <p>Customer ID: {formData.id}</p>
                    </div>
                </div>
            )}
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
                            {errors.CustomerName && <span className="text-danger">{errors.CustomerName}</span>}
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
                            {errors.CustomerEmail && <span className="text-danger">{errors.CustomerEmail}</span>}
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
                            {errors.CustomerContact && <span className="text-danger">{errors.CustomerContact}</span>}
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
                            {errors.FirstName && <span className="text-danger">{errors.FirstName}</span>}
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
                            {errors.LastName && <span className="text-danger">{errors.LastName}</span>}
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
                            {errors.AlternateContact && <span className="text-danger">{errors.AlternateContact}</span>}
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
                            {errors.AddresslineOne && <span className="text-danger">{errors.AddresslineOne}</span>}
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
                            {errors.AddresslineTwo && <span className="text-danger">{errors.AddresslineTwo}</span>}
                        </div>
                        <div className="textfield">
                            <CountryDropdownComponent
                                value={formData.Country ?? ''}
                                onChange={handleCountry}
                                disabled={isView}

                            />
                            {errors.Country && <span className="text-danger">{errors.Country}</span>}
                        </div>

                        <div className="textfield">
                            <StateDropdownComponent
                                country={formData.Country}
                                value={formData.State ?? ''}
                                onChange={handleState}
                                disabled={isView}
                            />
                            {errors.State && <span className="text-danger">{errors.State}</span>}
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
                            {errors.City && <span className="text-danger">{errors.City}</span>}
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
                            {errors.Pincode && <span className="text-danger">{errors.Pincode}</span>}
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

