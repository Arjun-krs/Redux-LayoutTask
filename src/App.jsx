import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/index";
import SidebarNav from "../src/components/SidebarNav";
import Form from "../src/components/Form/index";
import Table from "../src/components/Table/index";

function App() {
  return (

    <BrowserRouter>
      <div className=' d-flex'>
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
      </div>
    </BrowserRouter>

  );
}

export default App;
