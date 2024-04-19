import React from 'react'
import Sidebar from './dashComponent/Sidebar/Sidebar'
import Topbar from './dashComponent/Topbar/Topbar'

function DashSettings () {
  return (
    <div className="dashboard">
    <Topbar/>
    <Sidebar />
    <div className="dashcontent">
    setting
    </div>
  </div>
  )
}

export default DashSettings