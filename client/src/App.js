
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Products from './pages/Products/Products';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footers/Footer';
import "./App.scss"
import Login from "./Component/Login/Login";
import Register from "./Component/register/Register";


//outlet  hiển thị các component con tương ứng với các route khác nhau trong ứng dụng.
const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: "/Category",
          element: <Category />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/Register",
          element: <Register />
        }
      ],
    },

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
