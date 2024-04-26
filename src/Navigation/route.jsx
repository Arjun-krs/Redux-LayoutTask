import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "../Pages/Form/index";
import Table from "../Pages/Table/index";
import Login from "../Pages/Loginpage/index";
import Signup from "../Pages/Signuppage/index";

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/table" element={<Table />} />
            <Route path="/Form" element={<Form />} />
        </Routes>
    )
}

export default Routing;