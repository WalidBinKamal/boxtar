import { Link, NavLink, useNavigate } from 'react-router-dom';
import icon from '../../assets/logo_and_QR/boxter-logo.png'
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { login} = useAuth()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        // console.log(email, password)
        login(email, password)
            .then(() => {               
                navigate('/dashboard/orderList')
            })

    };
    return (
        <div className='max-w-7xl mx-auto zalando-sans p-4'>
            {/* Navbar for login page only */}
            <div className="navbar bg-base-100 navbar-start w-full">
                <Link to={'/'} className="btn btn-ghost w-32 md:p-4"><img src={icon} alt="" /></Link>
            </div>
            {/* Login codes */}
            <div className="flex justify-center items-center min-h-[24rem]">
                <div className="bg-white p-6 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full mb-3"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full mb-3"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;