import { productsProp } from "../../store/server/interface";
import { useProducts } from "../../store/server/query";
import Product from "./product";

const Home = () => {
  const { data, isLoading } = useProducts();


  if (isLoading) {
    return <div className=" animate-pulse">Loading Product...</div>;
  }

  return (
    <>
      <div className=" md:gap-10  grid grid-cols-12">
        {data?.map((product: productsProp) => (
          <div
            key={product.id}
            className=" md:col-span-6 col-span-12 lg:col-span-4"
          >
            <Product product={product} />
          </div>
        ))}
    
      </div>
    </>
  );
};

export default Home;
