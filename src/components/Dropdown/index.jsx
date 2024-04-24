import React from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

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

            />
        </div>
    );
};

export const StateDropdownComponent = ({ country, value, onChange, disabled }) => {
    return (
        <div className="textfield">
            <label className="form-label" htmlFor="State">State</label>
            <RegionDropdown
                className="form-select"
                id="State"
                country={country}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};
