import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.scss';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Layout/Header/index";
import SidebarNav from "../src/Layout/SidebarNav/index";
import Form from "../src/Pages/Form/index";
import Table from "../src/Pages/Table/index";
import Login from "../src/Pages/Login-page/index";
import Signup from "../src/Pages/Signup-page/index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      {isLoggedIn && (
        <div className='content'>
          <SidebarNav />
          <div className='body-wrapper'>
            <div className='head-wrapper'><Header /></div>
            <section>
              <Routes>
                <Route path="/table" element={<Table />} />
                <Route path="/Form" element={<Form />} />
              </Routes>
            </section>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
