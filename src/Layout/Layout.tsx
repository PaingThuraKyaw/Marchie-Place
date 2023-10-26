import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="  px-2  md:px-8">
      <Suspense fallback={"Loading..."}>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
