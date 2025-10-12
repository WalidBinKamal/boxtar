import { Link } from 'react-router-dom';
import icon from '../assets/logo_and_QR/boxter-logo.png'

const Navbar = () => {
    const lists = <>
        <li><a href="#features">Features</a></li>
        <li><a href="#size-guide">Size Guide</a></li>
        <li><a href="#order">Order</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {lists}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost w-32 md:p-4"><img src={icon} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Admin</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar; Navbar