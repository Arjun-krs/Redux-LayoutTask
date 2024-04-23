import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/index";
import SidebarNav from "../src/components/SidebarNav";
import Form from "../src/components/Form/index";
import Table from "../src/components/Table/index";
import Login from "../src/components/Admin/Login-page/index"
import Signup from "../src/components/Admin/Signup-page/index"

function App() {
  return (

    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes> */}
      <SidebarNav />
      <div className='body-wrapper'>
        <div className='head-wrapper'><Header /></div>
        <section>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </section>
      </div>

    </BrowserRouter>

  );
}

export default App;
