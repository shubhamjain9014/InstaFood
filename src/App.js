import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import {CartProvider} from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import "../node_modules/botstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
