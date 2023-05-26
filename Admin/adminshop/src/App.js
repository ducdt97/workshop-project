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
import Edit from "./components/Edit/Edit";
import Products from "./components/Products/Products";
import "./App.scss"
import AddProduct from "./components/Add/AddProduct";
import AddUser from "./components/Add/AddUser";
import EditUser from "./components/Edit/EditUser"




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
          path: "/AddUser",
          element: <AddUser />
        },
        {
          path: "/AddProduct",
          element: <AddProduct />
        },
        {
          path: "/Order",
          element: <Single />
        },
        {
          path: "/Products",
          element: <Products />
        },
        {
          path: "/edit/:id",
          element: <Edit />
        },
        {
          path: "/edituser/:id",
          element: <EditUser />
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
