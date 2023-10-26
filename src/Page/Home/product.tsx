import Button from "../../components/Button";
import { productsProp } from "../../store/server/interface";

const Product = ({ product }: { product: productsProp }) => {
  const addToCart = (item: productsProp | undefined) => {
    console.log(item);
  };

  return (
    <div className=" mb-5 md:mb-auto cursor-pointer shadow-md border-2 border-gray-500/20 md:border-0 md:shadow-lg md:px-5 px-3 rounded-md py-5 md:py-3">
      <img src={product.image} className=" mx-auto h-40" alt="" />
      <div>
        <h3 className=" md:text-xl text-lg font-bold text-gray-700 pt-2">
          {product.title.length > 30
            ? product.title.slice(0, 30)
            : product.title.slice(0, 60)}
        </h3>
        <p className=" text-gray-500 text-[15px]">
          {product.description.slice(0, 90)}
        </p>
        <div className=" mt-2 mb-1 flex items-center gap-4">
          <Button className=" w-full ">Detail</Button>
          <Button
            onClick={() => addToCart(product)}
            className=" w-full hover:bg-cyan-600 bg-cyan-500"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
