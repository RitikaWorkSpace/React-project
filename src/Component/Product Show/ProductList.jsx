import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/slices/productSlice';
import FlashSales from '../FlashSales/FlashSales';

const ProductList = () => {
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.products.product)

    useEffect(()=>{
        dispatch(fetchProduct());
        
    },[])
    const status = useSelector((state)=>state.products.status)
    if(status === "loading")
    {
        return <div>
            loading....
        </div>
    }

    

    return (
        <div>
            <FlashSales product={product}/>
        </div>
    );
}

export default ProductList;
