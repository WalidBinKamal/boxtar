import React, { useEffect } from 'react';
import Navbar from '../Components/Home/Navbar';
import ContactUs from '../Components/Home/ContactUs';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';
import { initFacebookPixel } from '../metaPixel';

const Main = () => {
    useEffect(() => {
        if (!window.fbqInitialized) {
            initFacebookPixel(import.meta.env.VITE_META_PIXEL_ID);
            window.fbqInitialized = true; // prevents duplicate init
        }
    }, [])
    return (
        <div className='max-w-7xl mx-auto zalando-sans p-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;