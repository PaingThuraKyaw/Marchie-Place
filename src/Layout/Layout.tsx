import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' mx-8'>
      <Outlet/>
    </div>
  )
}

export default Layout
