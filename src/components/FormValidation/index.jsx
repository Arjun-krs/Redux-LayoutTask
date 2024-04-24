import React from 'react';

function FormValidation({ formData, isView }) {
    const validate = () => {
        let errors = {};

        if (!formData.CustomerName) {
            errors.CustomerName = 'Customer Name is required';
        }

        if (!formData.CustomerEmail) {
            errors.CustomerEmail = 'Customer Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.CustomerEmail)) {
            errors.CustomerEmail = 'Email address is invalid';
        }

        if (!formData.CustomerContact) {
            errors.CustomerContact = 'Customer Phone Number is required';
        } else if (!/^[0-9]{10}$/.test(formData.CustomerContact)) {
            errors.CustomerContact = 'Phone number is invalid';
        }

        if (!formData.FirstName) {
            errors.FirstName = 'First Name is required';
        }

        if (!formData.LastName) {
            errors.LastName = 'Last Name is required';
        }

        if (!formData.AddresslineOne) {
            errors.AddresslineOne = 'Address Line 1 is required';
        }

        if (!formData.Country) {
            errors.Country = 'Country is required';
        }

        if (!formData.State) {
            errors.State = 'State is required';
        }

        if (!formData.City) {
            errors.City = 'City is required';
        }

        if (!formData.Pincode) {
            errors.Pincode = 'Pincode is required';
        } else if (!/^[0-9]{6}$/.test(formData.Pincode)) {
            errors.Pincode = 'Pincode is invalid';
        }

        return errors;
    };

    const errors = validate();

    return (
        <>
            {Object.keys(errors).map((key, index) => (
                <div key={index} className="alert alert-danger mt-2">{errors[key]}</div>
            ))}
        </>
    );
}

export default FormValidation;
