import { useLocation } from "react-router-dom";
import Product from "../Home/product";
import { productsProp } from "../../store/server/interface";
import Loader from "../../components/Loader";

const Search = () => {
  const { state } = useLocation();

  if (!state.product.length) {
    return <h5>No item</h5>;
  }

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h3 className=" font-semibold text-xl">Search for "{state.value}"</h3>
      <div className=" grid grid-cols-12 gap-10">
        {state.product?.map((item: productsProp) => (
          <div
            key={item.id}
            className=" md:col-span-6 col-span-12 lg:col-span-4"
          >
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
