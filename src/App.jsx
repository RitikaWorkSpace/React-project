import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// custom components:
import TopSection from "./Component/Navbar/TopSection";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/Navbar/About";
import Contact from "./Component/Navbar/Contact";
import Home from "./Component/Navbar/Home";
import Footer from "./Component/Navbar/Footer";
import SignUp from "./Component/Navbar/SignUp";
import LogIn from "./Component/Navbar/LogIn";
import Error from './Component/Navbar/Error';
import Vp from './Component/View Product/Vp';
import UA from './Component/User Account/UA';
import AllCard from './Component/Card/AllCard';
import CartPage from "./Component/Cart/CartPage";






const App = () => {
  return (
    <div>
      <TopSection />
      
       <BrowserRouter>
       <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Vp" element={<Vp />} />
          <Route path="/UA" element={<UA />} />
          <Route path="/AllCard" element={<AllCard />} />
          <Route path="/CartPage" element={<CartPage />} />

         

        </Routes>
        
        
      </BrowserRouter>

     


     <Footer />
 


    
    
    
    </div>
  );
};

export default App;
