// import React, { useEffect } from "react";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import Form from "../Pages/Form/index";
// import Table from "../Pages/Table/index";
// import Login from "../Pages/Loginpage/index";
// import Signup from "../Pages/Signuppage/index";

// function Routing() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (!token && location.pathname !== "/") {
//             navigate("/");
//         } else if (token && location.pathname === "/") {
//             navigate("/table");
//         }
//     }, [navigate, location]);

//     return (
//         <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/table" element={<Table />} />
//             <Route path="/Form" element={<Form />} />
//         </Routes>
//     );
// }

// export default Routing;

import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Form from "../Pages/Form/index";
import Table from "../Pages/Table/index";
import Login from "../Pages/Loginpage/index";
import Signup from "../Pages/Signuppage/index";

function Routing() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token && location.pathname !== "/" && location.pathname !== "/signup") {
            navigate("/");
        } else if (token && location.pathname === "/") {
            navigate("/table");
        }
    }, [navigate, location]);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/table" element={<Table />} />
            <Route path="/Form" element={<Form />} />
        </Routes>
    );
}

export default Routing;

