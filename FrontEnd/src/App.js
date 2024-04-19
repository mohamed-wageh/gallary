import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashHome from "./dashboard/DashHome/DashHome";
import Users from "./dashboard/Users";
import Orders from "./dashboard/Orders";
import DashProducts from "./dashboard/DashProducts";
import DashSettings from "./dashboard/DashSettings";

const router = createBrowserRouter([
  { path: "/", element: <DashHome /> },
  { path: "/dashboard/home", element: <DashHome /> },
  { path: "/dashboard/users", element: <Users /> },
  { path: "/dashboard/orders", element: <Orders /> },
  { path: "/dashboard/product", element: <DashProducts /> },
  { path: "/dashboard/setting", element: <DashSettings /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
