import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/checkout/Checkout";
import Bookings from "./pages/Bookings/Bookings";
import PrivetRoute from "./shared/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
     {
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/bookings",
      element:<PrivetRoute><Bookings></Bookings></PrivetRoute>
     },
     {
      path:"/checkout/:id",
      element:<PrivetRoute><Checkout></Checkout></PrivetRoute>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
     }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
]);

export default router
