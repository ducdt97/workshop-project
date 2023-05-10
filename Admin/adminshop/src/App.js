import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/Login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { Children } from "react";
function App() {



  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      /*Children: [{
        path: "/Single",
        element: <Single />
      },
      {
        path: "/Users",
        element: <List />
      },

      {
        path: "/order",
        element: <Single />
      }
      ]*/
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Users",
      element: <List />
    },

    {
      path: "/New",
      element: <New />
    },
    {
      path: "/Order",
      element: <Single />
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
