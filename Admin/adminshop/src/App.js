import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"
import Login from "./pages/Login/Login";
import Single from "./pages/single/Single";
import Navbar from "./components/navbar/Navbar";
import DataTable from "./components/Datatable/DataTable";
import Add from "./components/Add/Add";
import Products from "./components/Products/Products";
import "./App.scss"




const Layout = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className="navbarlayout">
        <Navbar className="navar" />
        <br />
        <Outlet />
      </div>
    </div>
  )
}



function App() {



  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/Users",
          element: <DataTable />
        },

        {
          path: "/Add",
          element: <Add />
        },
        {
          path: "/Order",
          element: <Single />
        },
        {
          path: "/Products",
          element: <Products />
        },]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
