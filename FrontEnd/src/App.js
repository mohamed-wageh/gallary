import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashHome from "./dashboard/DashHome/DashHome";
import Users from "./dashboard/Users";
import Orders from "./dashboard/Orders";
import DashProducts from "./dashboard/DashProducts/DashProducts";
import DashSettings from "./dashboard/DashSettings";
import Home from "./Component/Home/Home";
import Profile from "./Component/Profile/Profile";
import EditProfile from "./Component/EditProfile/EditProfile"
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Checkout/Checkout"
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
