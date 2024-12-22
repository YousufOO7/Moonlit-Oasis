import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayout/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import Rooms from "../Routs/Rooms/Rooms";
import RoomDetails from "../Routs/RoomDetails/RoomDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <h2>this is a error page</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>
        },
        {
          path: '/room/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router