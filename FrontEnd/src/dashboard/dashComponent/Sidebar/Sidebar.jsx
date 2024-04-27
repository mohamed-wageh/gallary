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
        <Link to="/dashboard/home" className="item">
          <HomeIcon className="icon" />
          Home
        </Link>
        <Link to="/dashboard/product" className="item">
          <Inventory2Icon className="icon" />
          Products
        </Link>
        <Link to="/dashboard/orders" className="item">
          <LocalMallIcon className="icon" />
          Orders
        </Link>
        <Link to="/dashboard/users" className="item">
          <PersonIcon className="icon" />
          Users
        </Link>
        <Link to="/dashboard/setting" className="item">
          <SettingsIcon className="icon" />
          Settings
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
