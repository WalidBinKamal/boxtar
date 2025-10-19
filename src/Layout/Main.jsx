import React from 'react';
import Navbar from '../Components/Home/Navbar';
import ContactUs from '../Components/Home/ContactUs';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto zalando-sans p-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;