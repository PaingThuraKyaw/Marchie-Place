import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Productslider from "../Page/Home/productSlider";

const Layout = () => {
  return (
    <div className="  px-2 md:px-8">
      <Navbar />
      <div className=" grid grid-cols-12">
        <div className=" col-span-2">
          <Productslider/>
        </div>
        <div className=" col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
