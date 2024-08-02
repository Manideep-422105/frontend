import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PreBook from './pages/PreBook'
import Products from './pages/Products';
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import ComparisonPage from './pages/ComparisionPage';
import FooterPage from './pages/FooterPage'
import Rentals from './pages/Rentals';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/prebook" element={<PreBook/>}/>
        <Route path="/product1" element={<Product1/>}/>
        <Route path="/product2" element={<Product2/>}/>
        <Route path="/product3" element={<Product3/>}/>
        <Route path="/comparison" element={<ComparisonPage/>}/>
        <Route path="/footer" element={<FooterPage/>}/>
        <Route path="/rentals" element={<Rentals/>}/>
      </Routes>
    </div>
  );
}

export default App;
