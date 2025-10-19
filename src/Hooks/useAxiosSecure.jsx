import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://boxtar-server.vercel.app/',
    withCredentials: true,
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;