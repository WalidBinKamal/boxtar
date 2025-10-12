import React from 'react';
import Navbar from '../Components/Navbar';
import ContactUs from '../Components/ContactUs';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto font-stinger p-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Main;