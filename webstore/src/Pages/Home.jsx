// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
// import Navbar from '../Component/Navbar';
// import Announcement from '../Component/Announcment';
import Slider from '../Component/Slider';
// import CategorieItem from '../Component/CategorieItem';
import Categories from '../Component/Categories';
import MenCollection from '../Component/MenCollection';
import GirlCollection from '../Component/Girlcollection';
import KidsCollection from '../Component/kidscollection';
import BeautyCollection from '../Component/Makeupcollection';
import News from '../Component/Newsletter';
import Footer from '../Component/Footer';
function Home() {
    return (
        <div>
           
            {/* <Navbar /> */}
            <Slider />
            <Categories />
            <MenCollection />
            <GirlCollection />
            <KidsCollection />
            <BeautyCollection />
            <News />
            <Footer />
            
    
        </div>
    )

}

export default Home;
