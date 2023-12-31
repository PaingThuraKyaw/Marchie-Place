// import { useState } from "react";
import Button from "../../components/Button";
import { useStore } from "../../store/client";
import { productsProp } from "../../store/server/interface";
import { motion } from "framer-motion";
const Product = ({ product }: { product: productsProp }) => {
  const { addToCart, card } = useStore();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" mb-5 md:mb-auto cursor-pointer shadow-md border-2 border-gray-500/20 md:border-0 md:shadow-lg md:px-5 px-3 rounded-md py-5 md:py-3"
    >
      <img src={product.image} className=" mx-auto h-40" alt="" />
      <div>
        <h3 className=" md:text-xl text-lg font-bold text-gray-700 pt-2">
          {product.title.length > 30
            ? product.title.slice(0, 25)
            : product.title.slice(0, 60)}
        </h3>
        <p className=" mb-2 text-gray-500 text-[15px]">
          {product.description.length > 90
            ? product.description.slice(0, 70)
            : product.description.slice(0, 100)}
        </p>
        <div className=" flex items-center gap-4">
          <Button className=" w-full ">Detail</Button>
          <Button
            disabled={!!card?.find((pt) => pt.id === product.id)}
            onClick={() => addToCart(product)}
            className=" disabled:opacity-70 disabled:bg-gray-500  disabled:cursor-not-allowed disabled:scale-100 w-full shadow-inner hover:bg-cyan-700 bg-cyan-600"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
