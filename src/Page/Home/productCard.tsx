import { useStore } from "../../store/client";
import { motion } from "framer-motion";
import { productsProp } from "../../store/server/interface";
import Button from "../../components/Button";
import { useState } from "react";
const ProductCard = ({ findId }: { findId: productsProp | undefined }) => {
  const { setOpen, productPs } = useStore();
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}
      className=" left-0 fixed top-0 w-full h-screen flex items-center justify-center "
    >
      <div
        onClick={() => setOpen(false)}
        className=" absolute w-full  -z-10 h-full bg-black/20 left-0 top-0"
      ></div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className=" bg-white w-[400px] rounded-md px-4 py-2"
      >
        <img src={findId?.image} alt="" className=" h-36" />
        <div className="">
          <h3 className=" pt-2 text-xl font-semibold">
            {findId?.title.length
              ? findId?.title.slice(0, 30)
              : findId?.title.slice(0, 60)}
          </h3>
          <p className=" text-black/50 text-[14px] ">
            {findId?.description.slice(0, 90)}
          </p>
          <div>
            <div className=" mt-2 mb-1 flex items-center gap-4">
              <Button className=" w-full ">Detail</Button>
              <Button
                onClick={() => addToCart(findId?.image)}
                className=" w-full hover:bg-cyan-600 bg-cyan-500"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.img
        src={img?.src}
        style={{
          position: img?.style.position,
          top: img?.style.top,
          bottom: img?.style.bottom,
          right: img?.style.right,
          left: img?.style.left,
          transition : "0.7s"
        }}
        className=" h-[80px]"
        alt=""
      />
    </motion.div>
  );
};

export default ProductCard;
