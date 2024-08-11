import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    console.log(location);
    
    const path =  location.pathname.substring(1); 
    return (
        <div>
           <span className='text-14px font-poppins font-[400] leading-[21px] opacity-50 '> Home /</span> {path}
        </div>
    );
}

export default Breadcrumbs;
