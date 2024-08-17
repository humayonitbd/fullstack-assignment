import { Outlet } from "react-router-dom";
import Navbar from "../../../pages/SharedPage/Navbar/Navbar";
import Footer from "../../../pages/SharedPage/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;