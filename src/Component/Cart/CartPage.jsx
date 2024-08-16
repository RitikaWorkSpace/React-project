import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "../Redux/slices/cartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.allCart.cartItems);
  const dispatch = useDispatch();

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-[1170px] w-[100%] mx-auto relative top-[80px] ">
        <Breadcrumbs />
      </div>
      {cart.length === 0 ? (
        <div className="flex justify-center text-black text-[36px] font-[600] leading-[48px] m-[100px]"> Your Cart is <span className="text-[red]">&nbsp; Empty &nbsp;</span>
     
        </div>
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
          </div>
          {/* product cart heading and cart item */}

          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between py-[24px] px-[39px] mt-[40px] shadow-[0_1px_13px_0px_#0000000D]"
            >
              <div className="flex gap-[22px] items-center">
                <span
                  onClick={() => dispatch(remove(item.id))}
                  className="cursor-pointer"
                >
                  X
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-[50px] max-h-[39px] object-cover"
                />

                <p className="text-[16px] font-[400] leading-[24px] font-poppins truncate max-w-[100px]">
                  {item.title}
                </p>
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins flex items-center">
                {item.price}
              </div>
              <div className="flex gap-[16px] border-2 border-black px-[12px] py-[6px]">
                <div className="flex justify-center items-center text-[16px] font-[400] leading-[24px] font-poppins">
                  {item.cartQuantity}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    onClick={() => dispatch(increment(item.id))}
                    className="hover:bg-[#DB4444] hover:text-white"
                    src="./cart01top arrow.svg"
                    alt="Decrement"
                  />

                  <img
                    onClick={() => dispatch(decrement(item.id))}
                    className="hover:bg-[#DB4444] hover:text-white"
                    src="./cart02bottomarrow.svg"
                    alt="Increment"
                  />
                </div>
              </div>
              <div className="text-[16px] font-[400] leading-[24px] font-poppins flex items-center">
                {/* ${item.price * item.cartQuantity} */}$
                {item.price * item.cartQuantity}
              </div>
            </div>
          ))}

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
                  Subtotal:
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
      
    </div>
  );
};

export default CartPage;
