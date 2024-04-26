import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from "../src/Navigation/mainlayout";
function App() {


  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>

  )
}

export default App;



