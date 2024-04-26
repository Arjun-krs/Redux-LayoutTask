import React from "react";
import { CountryDropdown } from 'react-country-region-selector';

export const CountryDropdownComponent = ({ value, onChange, disabled }) => {
    return (
        <div className="textfield">
            <label className="form-label" htmlFor="Country">Country</label>
            <CountryDropdown
                className="form-select"
                id="Country"
                value={value}
                onChange={onChange}
                disabled={disabled}
                name="Country"

            />
        </div>
    );
};

