import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../../dashboard/dashComponent/Topbar/Topbar'
import Sidebar from '../../dashboard/dashComponent/Sidebar/Sidebar'

const DashBoardLayout = () => {
  return (
      <div className="dashboard">
      <Topbar/>
      <Sidebar />
      <div className="dashcontent">
      <Outlet/>
      </div>
    </div>
  )
}

export default DashBoardLayout;