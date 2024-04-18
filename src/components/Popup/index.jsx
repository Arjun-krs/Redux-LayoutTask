import React from 'react';
import "../Popup/style.scss";
import "../../App.css"



const ConfirmPopup = ({ message, onConfirm, onCancel, children }) => {
    return (
        <div className="confirm-popup mx-auto">
            <p>{message}</p>
            <div className="popup-content">
                {children}
            </div>
            <div className="buttons">
                <button className="primary-btn" onClick={onConfirm}>Delete</button>
                <button className="secondary-btn" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmPopup;
