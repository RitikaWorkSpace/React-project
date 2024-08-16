import React from 'react';
import Banner from './Banner';
import FlashSales from '../FlashSales/FlashSales'
import Categories from '../Categories/Categories';
import BestSellingProduct from '../Best selling product/BestSellingProduct';
import EOP from '../Explore our product/EOP';
import NA from '../New Arrival/NA';
import CategoriesBanner from '../Categories/CategoriesBanner';


const Home = () => {
    return (
        <div>
            
            <Banner/>
            <FlashSales />
            <Categories/> 
            <BestSellingProduct/>
            <CategoriesBanner/>
            <EOP/>
             <NA/>
        </div>
    );
}

export default Home;
