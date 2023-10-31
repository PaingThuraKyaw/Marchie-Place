import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <Link className=" text-3xl font-bold" to={"/"}>
          MARCHIE
        </Link>
      </div>
      <div className=" bg-white">
        <div>
          <FaShoppingCart className=" text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
