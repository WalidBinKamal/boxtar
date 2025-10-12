import { Helmet } from "react-helmet-async";
import Order from "../Components/Order";
import SizeGuide from "../Components/SizeGuide";
import Features from "../Components/Features";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boxtar | Home</title>
            </Helmet>
            <div>Home</div>
            <Features></Features>
            <SizeGuide></SizeGuide>
            <Order></Order>
        </div>
    );
};

export default Home;