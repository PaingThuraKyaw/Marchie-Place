import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useStore } from "../store/client";
const Navbar = () => {
  const { setProductPs } = useStore();
  const positionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setProductPs(positionRef.current);
  }, [positionRef, setProductPs]);

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <Link className=" text-3xl font-bold" to={"/"}>
          MARCHIE
        </Link>
      </div>
      <div className=" bg-white">
        <div ref={positionRef}>
          <FaShoppingCart className=" text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
