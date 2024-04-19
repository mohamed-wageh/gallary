import React from 'react'
import Topbar from './dashComponent/Topbar/Topbar'
import Sidebar from './dashComponent/Sidebar/Sidebar'

function Orders  ()  {
  return (
    <div className="dashboard">
    <Topbar/>
    <Sidebar />
    <div className="dashcontent">
    Orders
    </div>
  </div>
  )
}

export default Orders