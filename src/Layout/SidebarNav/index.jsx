import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import "../../App.scss";

function SidebarNav() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "Logout") {
      try {
        const deletedToken = localStorage.getItem("token");
        console.log("Token to delete:", deletedToken);
        localStorage.removeItem("token");
        console.log("Token deleted successfully");
        navigate("/");
      } catch (error) {
        console.error("Error deleting token:", error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
  }, []);

  return (
    <div className="navigate d-flex flex-column p-3" style={{ gap: 28 }}>
      <img
        className={activeItem === "Logo" ? "active" : ""}
        src={Logo}
        alt="logo"
        width={40}
        height={40}

      />
      <img
        className={activeItem === "Home" ? "active" : ""}
        src={Homemenu}
        alt="home"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Product" ? "active" : ""}
        src={Product}
        alt="product"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Cart" ? "active" : ""}
        src={Cart}
        alt="cart"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Offer" ? "active" : ""}
        src={Offers}
        alt="offer"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Profile" ? "active" : ""}
        src={Profile}
        alt="profile"
        width={30}
        height={30}

      />

      <img
        className={activeItem === "Review" ? "active" : ""}
        src={Review}
        alt="review"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Support" ? "active" : ""}
        src={Support}
        alt="support"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Report" ? "active" : ""}
        src={Report}
        alt="report"
        width={30}
        height={30}

      />
      <img
        className={activeItem === "Setting" ? "active" : ""}
        src={Setting}
        alt="setting"
        width={30}
        height={30}

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
