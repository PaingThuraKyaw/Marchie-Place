import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="  px-2 md:px-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
