import { NavLink } from "react-router-dom";
import "./product.css"
const Productslider = () => {
  

  return (
    <div className=" flex flex-col space-y-4">
      {sliceData?.map((item) => (
       <nav>
         <NavLink className={" font-semibold text-black/80"} to={item.path}>{item.category}</NavLink>
       </nav>
      ))}
    </div>
  );
};

export default Productslider;

// dummy data

// eslint-disable-next-line react-refresh/only-export-components
export const sliceData = [
  {
    id: 1,
    category: "All product",
    path: "/",
  },
  {
    id: 2,
    category: "Jewelery",
    path: "/jewelery",
  },
  {
    id: 3,
    category: "Electronics",
    path: "/electronics",
  },
  {
    id: 4,
    category: "Women's clothing",
    path: "/women",
  },
  {
    id: 5,
    category: "Men's clothing",
    path: "/men",
  },
];
