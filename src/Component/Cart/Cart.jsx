import React from 'react';

const Cart = () => {
  return (
    <div className='relative inline-block'>
      <img src="./Cart1.svg" className='ml-4 sm:ml-4' alt="Cart" />
      <div className='text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
        0
      </div>
    </div>
  );
};

export default Cart;
