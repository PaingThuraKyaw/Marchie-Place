import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-3">
      <div>
        <Link className=" text-3xl font-bold" to={"/"}>
          MARCHIE
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
