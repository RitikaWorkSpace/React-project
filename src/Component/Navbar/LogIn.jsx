import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword} from 'firebase/auth'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user log in success")
  toast.success("Log In Successfully:)");
  window.location.href ="/UA"
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // user login

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] mb-[120px] xs:mx-[10px] md:mx-auto">
        <div>
          <img src="./loginImg2.svg" alt="Sign up image." />
        </div>
        <div className=" xs:mt-[20px] md:mx-auto md:my-auto">
          <form
            className="flex  flex-col items-center md:items-start"
            onSubmit={handleSubmit}
          >
            <h1 className="xs:text-[30px] sm:text-[36px] font-inter font-[500]  leading-[30px] mb-[24px] ">
              Log in to Exclusive
            </h1>
            <p className="font-poppins font-[400] text-[16px] leading-[24px] mb-[20px] ">
              Enter your details below
            </p>

            <input
              type="text"
              placeholder="Name or Email"
              name="emailOrPhone"
              className="border-b-[1px] border-grey outline-none mb-[20px] max-w-[348px] w-[100%]  "
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="text-red-500"></div>

            <br />

            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-b-[1px] border-grey outline-none    max-w-[348px] w-[100%] text-black"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-red-500"></div>

            <br />
            <div className="flex flex-col md:flex-row md:gap-[47px]">
              <button
                type="submit"
                className="bg-[#DB4444] text-[#FAFAFA] py-[16px] px-[48px] rounded-[5px] mb-[16px]"
              >
                Log In
                {/* {loading ? "loading..." : "Log in"} */}
              </button>
              {/* {error && alert(error)} */}

              <button type="button" className="text-[#DB4444] ">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

// //////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../Redux/slices/UserLoginSlice";
// import { useNavigate } from "react-router-dom";

// const LogIn = () => {
//   // user login
//   // state
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   //redux state
//   const { loading, error } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLoginEvent = (e) => {
//     e.preventDefault();
//     let userCredentials = {
//       username,
//       password,
//     };
//     dispatch(loginUser(userCredentials)).then((result) => {
//       if (result.payload) {
//         setUserName("");
//         setPassword("");
//         navigate("/UA");

//       }
//     });
//   };

//   // user login

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] mb-[120px] xs:mx-[10px] md:mx-auto">
//         <div>
//           <img src="./loginImg2.svg" alt="Sign up image." />
//         </div>
//         <div className=" xs:mt-[20px] md:mx-auto md:my-auto">
//           <form
//             onSubmit={handleLoginEvent}
//             className="flex  flex-col items-center md:items-start"
//           >
//             <h1 className="xs:text-[30px] sm:text-[36px] font-inter font-[500]  leading-[30px] mb-[24px] ">
//               Log in to Exclusive
//             </h1>
//             <p className="font-poppins font-[400] text-[16px] leading-[24px] mb-[20px] ">
//               Enter your details below
//             </p>

//             <input
//               type="text"
//               placeholder="Name or Email"
//               name="emailOrPhone"
//               className="border-b-[1px] border-grey outline-none mb-[20px] max-w-[348px] w-[100%]  "
//               onChange={(e) => setUserName(e.target.value)}
//             />

//             <div className="text-red-500"></div>

//             <br />

//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               className="border-b-[1px] border-grey outline-none    max-w-[348px] w-[100%] text-black"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="text-red-500"></div>

//             <br />
//             <div className="flex flex-col md:flex-row md:gap-[47px]">
//               <button
//                 type="submit"
//                 className="bg-[#DB4444] text-[#FAFAFA] py-[16px] px-[48px] rounded-[5px] mb-[16px]"
//               >
//                 {loading ? "loading..." : "Log in"}
//               </button>
//               {error && alert(error)}

//               <button type="button" className="text-[#DB4444] ">
//                 Forget Password?
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
