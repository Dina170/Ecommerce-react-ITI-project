import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Gallary from "./components/Gallary";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/cart.jsx";
//import { ShopContextProvider } from "./context/shop-context.jsx";
import ContactUs from "./components/contactUs.jsx";
import MainLayout from "./Admin/Main";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Gallary />
            </>
          }
        />
        <Route path="products" element={<Gallary />} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
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
