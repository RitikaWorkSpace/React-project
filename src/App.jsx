import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// custom components:
import TopSection from "./Component/Navbar/TopSection";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/Navbar/About";
import Contact from "./Component/Navbar/Contact";
import Home from "./Component/Navbar/Home";
import Footer from "./Component/Navbar/Footer";
import SignUp from "./Component/Navbar/SignUp";
import LogIn from "./Component/Navbar/LogIn";
import Error from "./Component/Navbar/Error";
import Vp from "./Component/View Product/Vp";
import UA from "./Component/User Account/UA";
import AllCard from "./Component/Card/AllCard";
import CartPage from "./Component/Cart/CartPage";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <TopSection />

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Vp/:id" element={<Vp />} />
        <Route path="/UA" element={<UA />} />
        <Route path="/AllCard" element={<AllCard />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/new" element={<new />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;




















// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Custom components:
// import TopSection from "./Component/Navbar/TopSection";
// import Navbar from "./Component/Navbar/Navbar";
// import About from "./Component/Navbar/About";
// import Contact from "./Component/Navbar/Contact";
// import Home from "./Component/Navbar/Home";
// import Footer from "./Component/Navbar/Footer";
// import SignUp from "./Component/Navbar/SignUp";
// import LogIn from "./Component/Navbar/LogIn";
// import Error from "./Component/Navbar/Error";
// import Vp from "./Component/View Product/Vp";
// import UA from "./Component/User Account/UA";
// import AllCard from "./Component/Card/AllCard";
// import CartPage from "./Component/Cart/CartPage";
// import Loader from "./Component/Loader/Loader"; 
// import Parent from "./Component/New Slider/Parent";
// import Child from "./Component/New Slider/Child";
// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading process
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Adjust time as needed

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <Loader />
       
//          // Show the loader while loading
//       ) : (
//         <>
//           <ToastContainer />
//           <TopSection />
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/SignUp" element={<SignUp />} />
//             <Route path="/logIn" element={<LogIn />} />
//             <Route path="/Error" element={<Error />} />
//             <Route path="/Vp/:id" element={<Vp />} />
//             <Route path="/UA" element={<UA />} />
//             <Route path="/AllCard" element={<AllCard />} />
//             <Route path="/CartPage" element={<CartPage />} />
//             <Route path="/Parent" element={<Parent />} />
//             <Route path="/Child" element={<Child />} />
           
//           </Routes>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

