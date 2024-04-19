import React from 'react'
import Topbar from './dashComponent/Topbar/Topbar'
import Sidebar from './dashComponent/Sidebar/Sidebar'

function DashProducts ()  {
  return (
    <div className="dashboard">
      <Topbar/>
      <Sidebar />
      <div className="dashcontent">
      product
      </div>
    </div>
  )
}

export default DashProducts