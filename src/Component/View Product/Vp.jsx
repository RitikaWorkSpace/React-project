import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Card from "../Card/Card";
import Rating from "../Card/Rating";
import { addToCart } from "../NewRedux/actions";
import { useParams } from "react-router-dom";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";
// import { fetchProductRequest, fetchMatchProductRequest } from "./actions";
const Vp = () => {
  // const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [matchProduct, setmatchproduct] = useState([]);
  const { id } = useParams();
  console.log(product);
  const singleProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };
  const fetchMatchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filterProduct = response.data.filter(
      (item) => item.catergory === product.catergory
    );
    setmatchproduct(filterProduct);
  };

  useEffect(() => {
    singleProduct();
  }, [id]);

  useEffect(() => {
    if (product.catergory) {
      fetchMatchProduct();
    }
  }, [product]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleAddToCart = () => {
    // dispatch(addToCart(product));
    if (user) {
      dispatch(addToCart(product));
      navigate("/CartPage");
    } else {
      navigate("/Signup");
    }
  };

  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 lg:px-0">
      <div className="relative top-[80px] text-center md:text-left">
        <div>
          <span className="text-[14px] font-poppins font-[400] leading-[21px] opacity-50">
            Account /
          </span>
          {product.title}
        </div>
      </div>

      <div className="h-[auto] mt-[100px] md:mt-[120px] lg:mt-[181px]">
        {/* View Product */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-[30px] md:gap-[50px] lg:gap-[70px]">
          <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[30px] items-center">
            <div className="flex flex-col md:flex-row lg:flex-col gap-[12px] md:gap-[16px]">
              {/* Thumbnails */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={product.image}
                    className=" object-contain bg-[#F5F5F5] px-[12px] md:px-[24px] py-[12px] max-w-[130px] md:max-w-[170px] max-h-[100px] md:max-h-[138px] w-full h-full "
                  />
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] px-[15px] md:px-[27px] pt-[100px] md:pt-[154px] pb-[90px] md:pb-[131px] w-full lg:w-[500px] h-auto lg:h-[600px] flex justify-center items-center">
              <img
                className="w-full h-auto max-w-[100%] max-h-[315px] object-contain"
                src={product.image}
                alt="Product"
              />
            </div>
          </div>

          <div className="w-full">
            <div>
              <h1 className="font-inter font-[600] text-[20px] md:text-[24px] leading-[24px] mb-[12px] md:mb-[16px]">
                {product.title}
              </h1>

              <div className="flex items-center mb-[12px] md:mb-[16px]">
                {product?.rating && (
                  <Rating
                    rate={product.rating.rate}
                    count={product.rating.count}
                  />
                )}
                <span className="text-[14px] font-[400] leading-[21px] opacity-[50%] ml-2">
                  |
                </span>
                <span className="text-[#00FF66] text-[14px] font-[400] leading-[21px] font-poppins ml-2">
                  In Stock
                </span>
              </div>

              <div className="text-[20px] md:text-[24px] font-[intel] font-[400] leading-[24px]">
                {product.price}
              </div>
              <p className="text-[14px] font-[400] leading-[21px] py-[12px] md:py-[24px] border-b-[1px] border-black">
                PlayStation 5 Controller Skin High quality vinyl with air <br />
                channel adhesive for easy bubble-free install & mess <br />
                free removal. Pressure sensitive.
              </p>
            </div>

            <div className="my-[16px] md:my-[24px]">
              {/* Color Selection */}
              <div className="flex gap-[10px] md:gap-[14px] mb-[16px] md:mb-[24px]">
                <label
                  htmlFor="option1"
                  className="mr-[8px] md:mr-[10px] font-intel font-[400] text-[16px] md:text-[20px] leading-[20px]"
                >
                  Color:
                </label>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="blue"
                  className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-blue-500 checked:border-black"
                />
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="red"
                  className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-red-500 checked:border-black"
                />
              </div>

              {/* Size Selection */}
              <div className="flex gap-[12px] md:gap-[16px] font-intel font-[400] text-[16px] md:text-[20px] leading-[20px] mb-[16px] md:mb-[24px]">
                Sizes:
                <div className="flex gap-[12px] md:gap-[16px]">
                  {["xs", "s", "ml", "l", "xl"].map((size, index) => (
                    <div
                      key={index}
                      className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Counter, Button, and Like */}
              <div className="flex flex-col xs:flex-row gap-[12px] md:gap-[16px]">
                <Counter />
                <button
                  className="bg-[#DB4444] text-white hover:text-white py-[10px] px-[24px] md:px-[48px] rounded-[5px]"
                  onClick={handleAddToCart}
                >
                  Buy Now
                </button>
                <button className="p-[5px] bg-white border-2 rounded-[5px]">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-2 border-black rounded-[5px]  max-w-[450px] w-[100%]">
              {/* child1 */}

              <div className="flex gap-[16px] border-b-[1px] border-black items-center pt-[24px] pb-[16px] ">
                <div className="ml-[10px]">
                  <img src="/vpicon01.svg" alt="icon 1 " />
                </div>
                <div>
                  <h1 className="mb-[8px]">Free Delivery</h1>
                  <p className="hover:underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              {/* child 2 */}
              <div className=" flex gap-[16px] items-center pt-[16px] pb-[24px]  ">
                <div className="ml-[10px]">
                  <img src="/vpicon02.svg" alt="icon 2" />
                </div>
                <div>
                  <h1 className="mb-[8px]">Free Delivery</h1>
                  <p className="hover:underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related  */}
      <div className="flex mt-[140px] mb-[60px]">
        <img
          src="/redRectangle.svg"
          alt="redRectangle"
          className="max-w-[20px] w-[100%] "
        ></img>
        <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
          Related Item
        </h3>
      </div>
      <div className="mb-[140px]">
        <Card />
      </div>
    </div>
  );
};

export default Vp;
// ============================================================================




