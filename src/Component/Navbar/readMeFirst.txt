all product card are located inside a folder named card.

 FlashSalesProductCardUI and BSProductUI. Please ignore them because I initially wrote the code there, but due to some issues, I created a different folder. I didn't delete the old one because I might need it for future reference. Thank you for reading."



  // add to cart
  const addToCart = (item) => {
    let isProductPresent = false;
    cart.forEach(product => {
      if (item.id === product.id) {
        isProductPresent = true;
      }
    });
    if (isProductPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 3000)
      return
    }
    setCart([...cart,item])
  };




  // add to cart


  // cart
const[show,setShow] = useState(true)
const[cart,setCart] = useState([])



// cart
=====================================================================
card.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import { useSelector } from "react-redux";

const Card = () => {

  // add to card
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };
  // add to card

  // showing the card detail
  // const { id, title, rating, image, price } = item;
  // show card

  // cart
const items = useSelector((state)=> state.allCart)
// cart
  return (
    <div className="max-w-[270px] w-full max-h-[350px] h-full " key={id}>
      {/* Card Container */}
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        {/* Card Image */}
        <div className="relative w-[270px] h-[250px] bg-[#F5F5F5] " onClick={handleClick}>
          <div className="absolute top-2 left-2 bg-[#DB4444] text-white p-1 rounded-md">
            -40%
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* Heart Icon */}
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </button>
            <Link to="/Vp">
              <button className="p-2 bg-white rounded-full">
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/* View Icon */}
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full h-full ">
            <img src={image} alt="Product" className="w-[190px] h-[180px] object-contain " />
          </div>

        </div>


        {/*add to card  */}
        {isDropdownOpen && (
          <div className="text-center text-white bg-black p-[5px]" >
            Add to Cart
          </div>
        )}
        {/* add to card */}

        {/* Card Body */}
        <div className=" h-[100px] bg-white mt-[16px]">
          <div className="title font-poppins font-[500] text-[16px] leading-[24px] truncate max-w-[240px]">
            {title}
          </div>
          <div className="price text-[#DB4444] mt-2">
            ${price} <span className="text-[#aaaba7] ml-[10px] line-through">$160</span>

          </div>
          <Rating rate={rating.rate} count={rating.count} />
        </div>
        {/* Card Body */}
      </div>
    </div>

  )
};

export default Card;
=================================================================================
cartpage
import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";

const CartPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="max-w-[1170px] w-[100%] mx-auto relative top-[80px] ">
        <Breadcrumbs />
      </div>

      {cart.cartItems.length == 0 ? (
        <div>empty </div>
      ) : (
        <div className="max-w-[1170px] mx-auto mt-[181px] mb-[140px]">
          {/* product cart heading and cart item */}
          <div>
            <div className="flex flex-row justify-between py-[24px] px-[39px]   shadow-[0_1px_13px_0px_#0000000D]">
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Product
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Price
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Quantity
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Subtotal
              </div>
            </div>
           
         
            {/* add to cart */}
            <div className="flex justify-between py-[24px] px-[39px]  mt-[40px] shadow-[0_1px_13px_0px_#0000000D]">
              <div>
                <img src="" alt="" />
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  bxkabskb
                </p>
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Price
              </div>
              <div className="flex gap-[16px] border-2 border-black px-[12px] py-[6px]">
                <div className="flex justify-center items-center text-[16px] font-[400] leading-[24px] font-poppins">
                  {count}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    onClick={decrement}
                    className="    hover:bg-[#DB4444] hover:text-white "
                    src="./cart01top arrow.svg"
                  ></img>
                  <img
                    onClick={increment}
                    className="    hover:bg-[#DB4444] hover:text-white "
                    src="./cart02bottomarrow.svg"
                  ></img>
                </div>
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins">
                Subtotal
              </div>
            </div>
            {/* add to cart */}
          </div>
          {/* product cart heading and cart item */}

          {/* return to shop ,update card */}
          <div className="flex flex-col lg:flex-row justify-between mt-[24px]">
            <div className="px-[48px] py-[16px] border-[1px] border-black text-[16px] font-[500] leading-[24px] font-poppins">
              Return To Shop
            </div>
            <div className="px-[48px] py-[16px] border-[1px] border-black text-[16px] font-[500] leading-[24px] font-poppins">
              Update Cart
            </div>
          </div>
          {/* return to shop ,update card */}

          {/* Apply Coupon ,process to checkout */}

          {/* Apply Coupon */}
          <div className="flex  flex-col lg:flex-row justify-between mt-[80px]">
            <div>
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-[300px] border-[1px] border-black mr-[16px] px-[24px] py-[16px] text-[16px] font-[400] leading-[24px] font-poppins rounded-[5px]"
              />
              <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-[16px] font-[500] leading-[24px] font-poppins rounded-[5px]">
                Apply Coupon
              </button>
            </div>
            {/* checkout */}
            <div className=" lg:w-[470px]  border-[2px] border-black ">
              <h1 className=" py-[16px] px-[24px] text-[20px] font-[500] leading-[28px] font-poppins">
                Cart Total
              </h1>
              <div className="flex justify-between border-b-[1px]  py-[16px] px-[24px]">
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  Subtotal:{" "}
                </p>
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  88ey
                </p>
              </div>
              <div className="flex justify-between border-b-[1px]  py-[16px] px-[24px]">
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  Shipping:{" "}
                </p>
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  Free
                </p>
              </div>
              <div className="flex justify-between  py-[16px] px-[24px]">
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  Total:{" "}
                </p>
                <p className="text-[16px] font-[400] leading-[24px] font-poppins">
                  88ey
                </p>
              </div>

              <button className="bg-[#DB4444] px-[48px] py-[16px] ml-[89px]  mr-[121px] mt-[16px] rounded-[5px] text-white text-[16px] font-[500] leading-[24px]">
                Procees to checkout
              </button>
            </div>
            {/* checkout */}
          </div>
          {/* Apply Coupon */}

          {/* Apply Coupon ,process to checkout */}
        </div>
      )}

      {/*  */}
    </div>
  );
};

export default CartPage;








view product
//     <div className="max-w-[1170px] w-[100%] mx-auto">
//       <div className='max-w-[1170px] w-[100%] mx-auto relative top-[80px] text-center md:text-left'>
//       <div>
//            <span className='text-14px font-poppins font-[400] leading-[21px] opacity-50 '> Account /</span> {product.title}
//         </div>

// </div>
//       <div className=" h-[600px] mt-[181px]">
//         {/* view product */}
//         <div className="grid grid-cols-1  lg:grid-cols-[60%_auto] gap-[70px]  ">
//           <div className="flex  flex-col lg:flex-row  gap-[30px] items-center ">
//             <div className="flex flex-col  md:flex-row lg:flex-col  gap-[16px]  ">
//               <div className=" ">
//                 <img
//                   src={product.image}
//                   className="bg-[#F5F5F5] px-[24px] py-[12px] max-w-[170px] max-h-[138px] w-full h-full"
//                 ></img>
//               </div>

//               <div className=" ">
//                 <img
//                   src={product.image}
//                   className="bg-[#F5F5F5] px-[24px] py-[12px] max-w-[170px] max-h-[138px] w-full h-full"
//                 ></img>
//               </div>
//               <div className=" ">
//                 <img
//                   src={product.image}
//                   className="bg-[#F5F5F5] px-[24px] py-[12px] max-w-[170px] max-h-[138px] w-full h-full"
//                 ></img>
//               </div>
//               <div className=" ">
//                 <img
//                   src={product.image}
//                   className="bg-[#F5F5F5] px-[24px] py-[12px] max-w-[170px] max-h-[138px] w-full h-full"
//                 ></img>
//               </div>
//             </div>
//             <div className="bg-[#F5F5F5] px-[27px] pt-[154px] pb-[131px]   lg:w-[500px] lg:h-[600px]   ">
//               <img
//                 className=" bg-cover max-w-[446px] max-h-[315px]  w-full h-full object-cover"
//                 src={product.image}
//               ></img>
//             </div>
//           </div>

//           <div className=" ">
//             <div>
//               <h1 className="font-inter font-[600px] text-[24px] leading-[24px] mb-[16px]">
//                 {product.title}
//               </h1>

//               <div className="flex items-center mb-[16px]">
//                 {/* Render the Rating component */}
//                 {product?.rating && (
//                   <Rating
//                     rate={product.rating.rate}
//                     count={product.rating.count}
//                   />
//                 )}

//                 <span className="text-[14px] font-[400] leading-[21px] opacity-[50%] ml-2">
//                   |
//                 </span>
//                 <span className="text-[#00FF66] text-[14px] font-[400] leading-[21px] font-poppins ml-2">
//                   In Stock
//                 </span>
//               </div>

//               <div className="text-[24px] font-[intel] font-[400] leading-[24px]">
//                 {product.price}
//               </div>
//               <p className="text-[14px] font-[400] leading-[21px] py-[24px] border-b-[1px] border-black ">
//                 PlayStation 5 Controller Skin High quality vinyl with air <br />
//                 channel adhesive for easy bubble free install & mess <br></br>
//                 free removal Pressure sensitive.
//               </p>
//             </div>
//             <div className="my-[24px]">
//               {/* Color Selection */}
//               <div className="flex gap-[14px] mb-[24px]">
//                 <label
//                   htmlFor="option1"
//                   className="mr-[10px] font-intel font-[400] text-[20px] leading-[20px]"
//                 >
//                   Color :
//                 </label>

//                 <input
//                   type="radio"
//                   id="option1"
//                   name="options"
//                   value="blue"
//                   className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-blue-500 checked:border-black"
//                 />

//                 <input
//                   type="radio"
//                   id="option2"
//                   name="options"
//                   value="red"
//                   className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-red-500 checked:border-black"
//                 />
//               </div>
//               {/* Color Selection */}

//               {/* size */}
//               <div className="flex gap-[16px] font-intel font-[400] text-[20px] leading-[20px] mb-[24px]">
//                 Sizes:
//                 <div className="flex gap-[16px] justify-center items-center">
//                   <div className="w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white">
//                     xs
//                   </div>
//                   <div className="w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white">
//                     s
//                   </div>
//                   <div className="w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white">
//                     ml
//                   </div>
//                   <div className="w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white">
//                     l
//                   </div>
//                   <div className="w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white">
//                     xl
//                   </div>
//                 </div>
//               </div>
//               {/* size */}

//               {/* counter,button and like */}
//               <div className="flex gap-[16px]">
//                 <Counter />
//                 <button className="bg-[#DB4444] text-white hover:text-white py-[10px] px-[48px] rounded-[5px]">
//                   Buy Now
//                 </button>
//                 <button className=" p-[5px] bg-white   border-2 rounded-[5px]">
//                   <svg
//                     className="h-6 w-6 text-gray-600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                   >
//                     <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
//                   </svg>
//                 </button>
//               </div>
//               {/* counter,button and like */}
//             </div>
//             {/*  */}
//             <div className="border-2 border-black rounded-[5px]  max-w-[450px] w-[100%]">
//               {/* child1 */}

//               <div className="flex gap-[16px] border-b-[1px] border-black items-center pt-[24px] pb-[16px] ">
//                 <div className="ml-[10px]">
//                   <img src="./vpicon01.svg" alt="" />
//                 </div>
//                 <div>
//                   <h1 className="mb-[8px]">Free Delivery</h1>
//                   <p className="hover:underline">
//                     Enter your postal code for Delivery Availability
//                   </p>
//                 </div>
//               </div>

//               {/* child 2 */}
//               <div className=" flex gap-[16px] items-center pt-[16px] pb-[24px]  ">
//                 <div className="ml-[10px]">
//                   <img src="./vpicon02.svg" alt="" />
//                 </div>
//                 <div>
//                   <h1 className="mb-[8px]">Free Delivery</h1>
//                   <p className="hover:underline">
//                     Enter your postal code for Delivery Availability
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//         </div>
//         {/* view product */}
//       </div>

//       {/* related  */}
//      <div className="flex mt-[140px] mb-[60px]">
//          {/* <img src="redRectangle.svg" alt="redRectangle" className="max-w-[20px] w-[100%] "></img>
//         <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
//           Related Item
//         </h3>*/}
//       </div> 
//     </div>