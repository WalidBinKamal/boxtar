import { Helmet } from "react-helmet-async";
import Order from "../Components/Home/Order";
import SizeGuide from "../Components/Home/SizeGuide";
import Features from "../Components/Home/Features";
import ContactUs from "../Components/Home/ContactUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boxtar | Home</title>
            </Helmet>
            {/* <div>Home</div> */}
            <Features></Features>
            <SizeGuide></SizeGuide>
            <Order></Order>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;