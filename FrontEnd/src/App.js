import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashHome from "./dashboard/DashHome/DashHome";
import Users from "./dashboard/Users";
import Orders from "./dashboard/Orders";
import DashProducts from "./dashboard/DashProducts/DashProducts";
import DashSettings from "./dashboard/DashSettings";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile"
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout"
import AddProduct from "./dashboard/AddProduct/AddProduct";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard/home", element: <DashHome /> },
  { path: "/dashboard/users", element: <Users /> },
  { path: "/dashboard/orders", element: <Orders /> },
  { path: "/dashboard/product", element: <DashProducts /> },
  { path: "/dashboard/setting", element: <DashSettings /> },
  {path:"/profile" , element: <Profile />},
  {path:"/profile/edit" , element: <EditProfile />},
  {path:"/cart" , element: <Cart />},
  {path: "/cart/checkout" , element:<Checkout />},
  { path: "/dashboard/addproduct", element: <AddProduct /> },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
