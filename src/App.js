import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import { CartProvider } from "./components/ContextReducer";
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exect path="/" element={<Home></Home>}></Route>
          <Route exect path="/login" element={<Login />}></Route>
          <Route exect path="/creatuser" element={<Signup />}></Route>
          <Route exect path="/myOrder" element={<MyOrder />}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
