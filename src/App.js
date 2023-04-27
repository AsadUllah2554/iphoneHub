import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Components/Pages/Home'
import ShoppingCart from './Components/Pages/ShoppingCart'
import ContactUs from './Components/Form'
import SignUpForm from './Components/SignUpForm'
import ProductsPage from './Components/Pages/ProductsCats';
import { Routes, Route } from "react-router-dom"
import {CartProvider} from './Context/notes/CartState';
import ProductPage from './Components/SingleProduct';


function App() {
  return (

    <>
      <CartProvider>

        <Navbar />
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/singleproduct/:id" element={<ProductPage />} />
          <Route path="/iphone" element={<ProductsPage />} />
          <Route path="/watches" element={<ProductsPage />} />
          <Route path="/airpods" element={<ProductsPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        
      </CartProvider>
    </>

  );
}

export default App;
