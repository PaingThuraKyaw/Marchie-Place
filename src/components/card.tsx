import { useStore } from "../store/client";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
const Card = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { card, addToQuantity, removeToQuantity, removeToCart } = useStore();

  const Total = card.reduce((pv, cv) => pv + cv.price * cv.quantity, 0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
        className=" w-full h-full bottom-0 bg-black/20 left-0 fixed top-0"
      ></motion.div>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ duration: 0.2, type: "tween" }}
        className=" overflow-y-scroll px-4 py-3 fixed md:w-[500px] w-full  right-0 top-0 h-full z-10 bg-white shadow-md"
      >
        <div className=" flex items-center justify-between">
          <h3 className=" text-2xl font-semibold ">Shopping Cart</h3>
          <button onClick={() => setOpen(false)}>
            <RxCross1 />
          </button>
        </div>
        {/* card and total price */}
        <div className=" relative">
          <AnimatePresence>
            {card?.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.id}
                className=" shadow-md relative  mt-4 py-2 px-3 border flex items-center justify-between"
              >
                <img src={item.image} className=" h-20" alt="" />
                <button
                  className=" bg-red-500 text-white font-semibold text-[12px] px-3 py-[5px] absolute right-0 top-0 "
                  onClick={() => removeToCart(item)}
                >
                  <RxCross1 />
                </button>
                <div className=" mt-5">
                  <h5 className=" font-bold text-sm">
                    {" "}
                    {item.title.length > 30
                      ? item.title.slice(0, 30)
                      : item.title.slice(0, 60)}
                  </h5>
                  <div className=" w-[250px] flex items-center justify-between">
                    <p className=" font-semibold text-sm pt-2">
                      {Math.ceil(item.price * item.quantity)} $
                    </p>
                    <div className=" mt-4 h-8 flex items-center justify-end">
                      <button
                        onClick={() => removeToQuantity(item.id)}
                        className="bg-blue-500 h-full px-3 rounded-l-md text-white "
                      >
                        <AiOutlineMinus />
                      </button>
                      <p className=" bg-gray-100 focus:outline-none text-end pr-3 h-full py-1 w-20">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => addToQuantity(item.id)}
                        className=" bg-blue-500 h-full px-3 rounded-r-md text-white "
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div layout className=" mt-6 border-t-2 pt-2 px-4 w-full">
          <div className=" flex items-center justify-between">
            <h5 className=" text-xl font-bold">Total Price</h5>
            <p className=" font-semibold">{Math.ceil(Total)} $</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
