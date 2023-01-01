import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Components/Pages/Home'
import ShoppingCart from './Components/Pages/ShoppingCart'
import ContactUs from './Components/Form'
import SignUpForm from './Components/SignUpForm'
import Iphone from './Components/Pages/Iphone';
import Watches from './Components/Pages/Watches';
import Airpods from './Components/Pages/Airpods';
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
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/airpods" element={<Airpods />} />
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
