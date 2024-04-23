import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import Homemenu from "../../assets/images/homemenu.svg";
import Product from "../../assets/images/product.svg";
import Cart from "../../assets/images/cart.svg";
import Offers from "../../assets/images/offfer.svg";
import Profile from "../../assets/images/profile.svg";
import Review from "../../assets/images/review.svg";
import Support from "../../assets/images/support.svg";
import Report from "../../assets/images/report.svg";
import Setting from "../../assets/images/settings.svg";
import Logout from "../../assets/images/logout.svg";
import "../../App.css";

function SidebarNav() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="navigate d-flex flex-column p-3" style={{ gap: 28 }}>
      <img
        className={activeItem === "Logo" ? "active" : ""}
        src={Logo}
        alt="logo"
        width={40}
        height={40}
        onClick={() => handleItemClick("Logo")}
      />
      <img
        className={activeItem === "Home" ? "active" : ""}
        src={Homemenu}
        alt="home"
        width={30}
        height={30}
        onClick={() => handleItemClick("Home")}
      />
      <img
        className={activeItem === "Product" ? "active" : ""}
        src={Product}
        alt="product"
        width={30}
        height={30}
        onClick={() => handleItemClick("Product")}
      />
      <img
        className={activeItem === "Cart" ? "active" : ""}
        src={Cart}
        alt="cart"
        width={30}
        height={30}
        onClick={() => handleItemClick("Cart")}
      />
      <img
        className={activeItem === "Offer" ? "active" : ""}
        src={Offers}
        alt="offer"
        width={30}
        height={30}
        onClick={() => handleItemClick("Offer")}
      />
      <img
        className={activeItem === "Profile" ? "active" : ""}
        src={Profile}
        alt="profile"
        width={30}
        height={30}
        onClick={() => handleItemClick("Profile")}
      />

      <img
        className={activeItem === "Review" ? "active" : ""}
        src={Review}
        alt="review"
        width={30}
        height={30}
        onClick={() => handleItemClick("Review")}
      />
      <img
        className={activeItem === "Support" ? "active" : ""}
        src={Support}
        alt="support"
        width={30}
        height={30}
        onClick={() => handleItemClick("Support")}
      />
      <img
        className={activeItem === "Report" ? "active" : ""}
        src={Report}
        alt="report"
        width={30}
        height={30}
        onClick={() => handleItemClick("Report")}
      />
      <img
        className={activeItem === "Setting" ? "active" : ""}
        src={Setting}
        alt="setting"
        width={30}
        height={30}
        onClick={() => handleItemClick("Setting")}
      />
      <img
        className={activeItem === "Logout" ? "active" : ""}
        src={Logout}
        alt="logout"
        width={30}
        height={30}
        onClick={() => handleItemClick("Logout")}
      />
    </div>
  );
}

export default SidebarNav;
