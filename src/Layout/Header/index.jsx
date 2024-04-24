import React from "react";
import "../../App.scss";
import Notification from "../../assets/images/notifications.svg";
import Profile from "../../assets/images/avatar.svg";
function header() {
  return (
    <>
        <div className="header d-flex justify-content-between" >
          <h2 style={{padding:20}}>Customers</h2>
          <div className="d-flex justify-content-end" style={{ gap: 20,marginRight:20 }}>
            <img src={Notification}  />
            <img src={Profile}  />
          </div>
        </div>
    </>
  );
}
export default header;