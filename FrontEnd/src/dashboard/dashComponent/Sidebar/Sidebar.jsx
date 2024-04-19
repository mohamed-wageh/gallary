import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";

// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import "../Sidebar/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="menu">

      <div className="menu--list">
        <a href="/dashboard/home" className="item">
          <HomeIcon className="icon" />
          Home
        </a>
        <a href="/dashboard/product" className="item">
          <Inventory2Icon className="icon" />
          Products
        </a>
        <Link to="/dashboard/orders" className="item">
          <LocalMallIcon className="icon" />
          Orders
        </Link>
        <a href="/dashboard/users" className="item">
          <PersonIcon className="icon" />
          Users
        </a>
        <a href="/dashboard/setting" className="item">
          <SettingsIcon className="icon" />
          Settings
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
