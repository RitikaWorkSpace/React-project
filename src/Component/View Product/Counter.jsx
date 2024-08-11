import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <div className="flex ">
            <div className="flex items-center border border-gray-300 rounded ">
                <button 
                    onClick={decrement} 
                    className="  p-[10px] border-r-[1px]  hover:bg-[#DB4444] hover:text-white "
                >
                    -
                </button>
                <div className="p-[10px] font-bold">{count}</div>
                
                <button 
                    onClick={increment} 
                    className="   p-[10px] border-l-[1px]  hover:bg-[#DB4444] hover:text-white "
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
