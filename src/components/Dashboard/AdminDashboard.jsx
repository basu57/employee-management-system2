import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Headers changeUser={props.changeUser}/>
        <CreateTask/>
         <AllTask />
    </div>
  )
}

export default AdminDashboard