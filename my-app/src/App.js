import "./App.css";
import Navbar from "./components/Navbar";
import Gallary from "./components/Gallary";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/cart.jsx";
import ContactUs from "./components/contactUs.jsx";
import MainLayout from "./Admin/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/landing";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {console.log("location", location.pathname === "/Login")}
      {!(
        location.pathname === "/Login" || location.pathname === "/Register"
      ) && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Gallary />
              <Footer />
            </>
          }
        />
        <Route path="products" element={<Gallary />} />
        <Route path="about" element={<About />} />
        <Route
          path="products/product/:productId"
          element={<ProductDetails />}
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="Dashboard/*" element={<MainLayout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
