import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayout/MainLayOut";
import Home from "../Components/Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <h2>this is a error page</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);

  export default router