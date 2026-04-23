import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/Context/Cartcontext";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Hero";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import Products4 from "./pages/Products4";
import Products5 from "./pages/Products5";
import Products6 from "./pages/Products6";
import Checkout from "./pages/Checkout";
import ProductsDetail from './pages/ProductDetails';
import Products2Details from "./pages/Products2Details";
import Products3Details from "./pages/Products3Details";
import Products4Details from "./pages/Products4Details";
import Products5Details from "./pages/Products5Details";
import Products6Details from "./pages/Products6Details";
import About from "./pages/About";
import Varities from "./pages/Varities";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
           <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products2" element={<Products2 />} />
          <Route path="/Products3" element={<Products3 />} />
          <Route path="/Products4" element={<Products4 />} />
          <Route path="/Products5" element={<Products5 />} />
          <Route path="/Products6" element={<Products6 />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Products/:id" element={<ProductsDetail />} />
          <Route path="/Products2/:id" element={<Products2Details />} />
          <Route path="/Products3/:id" element={<Products3Details />} />
          <Route path="/Products4/:id" element={<Products4Details />} />
          <Route path="/Products5/:id" element={<Products5Details />} />
          <Route path="/Products6/:id" element={<Products6Details />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Varities" element={<Varities/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
