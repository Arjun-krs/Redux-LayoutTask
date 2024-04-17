import React from 'react';
import "../Popup/style.scss";
import "../../App.css"
import Button from "../Button/index"



const ConfirmPopup = ({ message, onConfirm, onCancel, children }) => {
    return (
        <div className="confirm-popup mx-auto">
            <p>{message}</p>
            <div className="popup-content">
                {children}
            </div>
            <div className="buttons">
                {/* <Button text="Delete"
                    className="delete"
                    backgroundColor="#FE7720"
                    color="white"
                    border="1px solid #FE7720"
                    borderRadius="8px"
                    width="120px"
                    height="44px"
                    fontSize="18px"
                    onClick={onConfirm}

                /> */}
                <button className="primary-btn" onClick={onConfirm}>Delete</button>
                <button className="secondary-btn"onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmPopup;
