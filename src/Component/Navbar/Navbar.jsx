import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import Cart from "../Cart/Cart";
import NavbarUser from "../User Account/NavbarUser";

const Navbar = () => {





  const [list, setList] = useState(false);

  const handleClick = () => {
    setList(!list);
  };


    // Access authentication state from Redux
    const { user } = useSelector((state) => state.user);

  return (
    <div className="border-b-[1px]">
      <div className="max-w-[1170px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center py-4 ">
        {/* Logo */}
        <div className="font-inter font-[700] text-[24px] leading-[24px] mb-4 sm:mb-0">
          Exclusive
        </div>

        <div className="block sm:hidden ">
                <img
                  src="./Mobile Menu.svg"
                  alt="Menu"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={handleClick}
                 
                />
              </div>
        {/* Navigation Links */}
        
        <nav className={`${list ? 'block' : 'hidden'} sm:block my-4 sm:my-0`}>
        <ul className="flex flex-col  gap-[10px] sm:flex-row justify-evenly space-y-2 sm:space-y-0 sm:space-x-8">
          <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent hover:border-black">
            <Link to="/">Home</Link>
          </li>
          <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent hover:border-black">
            <Link to="/About">About</Link>
          </li>
          <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent hover:border-black">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent hover:border-black">
            <Link to="/Signup">SignUp</Link>
          </li>
        </ul>
      </nav>
     
      
     

        {/* Search Bar and Icons */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 sm:space-y-0">
          <div className="flex items-center gap-[34px] bg-[#F5F5F5] py-[7px] px-[20px] rounded-[5px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-poppins font-[400] text-[12px] leading-[24px] text-[#000000] bg-[#F5F5F5] mr-[10px]"
            />
            <img
              src="./NavbarSearchIcon.svg"
              className="max-w-[16px] w-full "
              alt="Search"
            />
          </div>
          <div className="flex items-center space-x-4 ml-[10px]">
            <img src="./Wishlist.svg" className="ml-4 sm:ml-4" alt="Wishlist" />

<div>
  
{/* <Cart size ={cart.length} setShow={setShow}/> */}

<Link to='/CartPage'>
       <div className='relative inline-block'>
      <img src="./Cart1.svg" className='ml-4 sm:ml-4' alt="Cart" />
      <div className='text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2' onClick={()=>setShow(false)}>
       0 {/* {size} */}

      </div>
    </div>
      </Link>
</div>
 {user ? (
              <div>
                <NavbarUser />
              </div>
            ) : (
              <div>
                
              </div>
            )}
               
             
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
