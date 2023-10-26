import { useStore } from "../../store/client";
import { motion } from "framer-motion";
import { productsProp } from "../../store/server/interface";
const ProductCard = ({findId} : {findId : productsProp | undefined}) => {
  const { setOpen  } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}
      className=" left-0 fixed w-full h-screen flex items-center justify-center "
    >
      <div
        onClick={() => setOpen(false)}
        className=" absolute w-full  -z-10 h-full bg-black/20 left-0 top-0"
      ></div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className=" bg-white"
      >
        {findId?.title}
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
