import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from "../store/client";
import Card from "./card";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SearchBox from "./SearchBox";
const Navbar = () => {
  const { card } = useStore();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between py-3 px-4">
      <div>
        <Link className=" text-3xl font-bold" to={"/"}>
          MARCHIE
        </Link>
      </div>
      <div className="  bg-white">
        <div className=" flex items-center">
          {/* search box */}
          <SearchBox />
          <button
            onClick={() => {
              card.length !== 0 && setOpen(true);
            }}
            className=" relative"
          >
            <FaShoppingCart className=" text-2xl text-gray-600" />
            <span className=" absolute -top-2 text-white text-sm bg-red-500 rounded-full w-5 text-center -right-3">
              {card.length}
            </span>
          </button>
        </div>
        <AnimatePresence>
          {open && card.length !== 0 && <Card setOpen={setOpen} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
