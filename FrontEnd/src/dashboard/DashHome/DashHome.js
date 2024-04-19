import React from "react";
import Sidebar from "../dashComponent/Sidebar/Sidebar";
import "./dashHome.css";
import Content from "../dashComponent/Content";
import Topbar from "../dashComponent/Topbar/Topbar";

function DashHome() {
  return (
    <div className="dashboard">
      <Topbar/>
      <Sidebar />
      <div className="dashcontent">
      <Content/>
      </div>
    </div>
  );
}

export default DashHome;
