import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Page/Home";
import Men from "./Page/men/Men";
import Jewelery from "./Page/Jewelery/Jewelery";
import Electronics from "./Page/Electronic/Electronic";
import Women from "./Page/Women/Women";
import Search from "./Page/Search/Search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/jewelery",
          element: <Jewelery />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
