import { AnimatePresence } from "framer-motion";
import { useStore } from "../../store/client";
import { productsProp } from "../../store/server/interface";
import { useProducts } from "../../store/server/query";
import Product from "./product";
import ProductCard from "./productCard";

const Home = () => {
  const { data } = useProducts();
  const { open, productId } = useStore();

  const findId = data?.find((product) => product.id === productId);


  return (
    <div className=" gap-10 grid grid-cols-12">
      {data?.map((product: productsProp) => (
        <div key={product.id} className=" col-span-4">
          <Product product={product} />
        </div>
      ))}
      <AnimatePresence>{open && <ProductCard findId={findId} />}</AnimatePresence>
    </div>
  );
};

export default Home;
