import { productsProp } from "../../store/server/interface";
import { useProducts } from "../../store/server/query";
import Product from "./product";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, isLoading } = useProducts();



  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="gap-10 grid grid-cols-12">
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
