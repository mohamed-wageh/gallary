import React from "react";
import Topbar from "../dashComponent/Topbar/Topbar";
import Sidebar from "../dashComponent/Sidebar/Sidebar";
import "../DashProducts/dashproducts.css"

function DashProducts() {
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar />
      <div className="dashcontent">
        product
        <a href="/dashboard/addproduct">
        <button className="btn" >
          GO
          </button>
          </a>
      </div>
    </div>
  );
}

export default DashProducts;
