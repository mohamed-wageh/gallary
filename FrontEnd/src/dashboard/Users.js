import React from 'react'
import Topbar from './dashComponent/Topbar/Topbar'
import Sidebar from './dashComponent/Sidebar/Sidebar'

function Users(){
  return (
    <div className="dashboard">
    <Topbar/>
    <Sidebar />
    <div className="dashcontent">
    users
    </div>
  </div>
  )
}

export default Users