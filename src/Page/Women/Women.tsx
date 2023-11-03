import Loader from "../../components/Loader";
import { useProducts } from "../../store/server/query";
import Product from "../Home/product";

const Women = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" grid grid-cols-12 gap-10">
      {data?.map((item) => {
        if (item.category === "women's clothing") {
          return (
            <div
              key={item.id}
              className=" md:col-span-6 col-span-12 lg:col-span-4"
            >
              <Product product={item}  />
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default Women;
