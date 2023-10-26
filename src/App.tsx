import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Page/Home"

const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children : [{
        index : true,
        element : <Home/>
      }]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
