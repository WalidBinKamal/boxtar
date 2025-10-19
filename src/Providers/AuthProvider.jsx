import { createContext, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)


    const login = async (email, password) => {
        setLoading(true)
        axiosSecure.post('/login', { email, password })
            .then(data => {
                setUser({ email })
                setLoading(false)
                return data.data
            })
            .catch(err => {
                setLoading(false)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data.message,
                });
            })
    }

    const logout = async () => {
        setLoading(true)
        axiosSecure.post('/logout')
            .then(() => {
                setUser(null)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }
    const authInfo = {
        user,
        login,
        logout,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;