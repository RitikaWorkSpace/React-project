import React, { useRef } from 'react';
import Child from './Child';

function Parent() {
  const sliderRef = useRef(null);

  const preButton = () => {
    let box = sliderRef.current; // Access the .Slider div
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const nextButton = () => {
    let box = sliderRef.current; // Access the .Slider div
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div>
      <div className='flex justify-between'>
        <button className="bg-red-500 p-[20px]" onClick={preButton}>-</button>
        <button className="bg-red-500 p-[20px]" onClick={nextButton}>+</button>
      </div>
      <Child ref={sliderRef} />
    </div>
  );
}

export default Parent;
