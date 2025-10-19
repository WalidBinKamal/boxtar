import { Link, NavLink, Outlet } from 'react-router-dom';
import icon from "../assets/logo_and_QR/boxter-logo.png"
import DashNavbar from '../Components/Dashboard/DashNavbar';

const Dashboard = () => {
    return (
        <div className='max-w-7xl mx-auto zalando-sans p-4'>
            <DashNavbar></DashNavbar>
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;