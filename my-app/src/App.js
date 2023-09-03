import {Route ,Routes ,BrowserRouter} from "react-router-dom" 
import './App.css';
import Cart from './component/cart.jsx';
import {ShopContextProvider} from './context/shop-context.jsx'
import ContactUs from './component/contactUs.jsx'


function App() {


  return (

    <div className="App">
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactUs"  element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  </div>
  );
}

export default App;
