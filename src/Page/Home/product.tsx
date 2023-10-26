import { useStore } from "../../store/client";
import { productsProp } from "../../store/server/interface";

const Product = ({ product }: { product: productsProp }) => {
  const { setOpen, setProductId } = useStore();

  const handlerSubmit = (id: number) => {
    setOpen(true);
    setProductId(id);
  };

  return (
    <div
      onClick={() => handlerSubmit(product.id)}
      className=" cursor-pointer shadow-lg px-5 rounded-md py-3"
    >
      <img src={product.image} className=" mx-auto h-40" alt="" />
      <div>
        <h3 className=" text-xl font-bold text-gray-700 py-2">
          {product.title.length > 30
            ? product.title.slice(0, 30)
            : product.title.slice(0, 60)}
        </h3>
        <p className=" text-black/50 text-[15px]">
          {product.description.slice(0, 90)}
        </p>
      </div>
    </div>
  );
};

export default Product;
