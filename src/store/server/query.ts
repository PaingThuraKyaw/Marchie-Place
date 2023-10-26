import { axios } from "..";
import { productsProp } from "./interface";
import { useQuery } from "@tanstack/react-query";

const products = async (): Promise<productsProp[]> => {
  const { data } = await axios.get("/products");
  return data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: products,
  });
};

//detail
const productDetail = async (id: number) : Promise<productsProp> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

export const useProductDetail = (id: number)  => {
  return useQuery({
    queryKey: ["productdetail", id],
    queryFn: () => productDetail(id),
  });
};
