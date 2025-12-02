import AppRoutes from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/common/Navbar.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function App() {

  axios.defaults.baseURL = `http://localhost:8000/`;
  
  return (
    <>
     <AppRoutes />
    </>
  )
}

export default App
