import React from 'react'
import Headers from '../others/Headers'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({data}) => {
  return (
//     <div className='p-10 bg-[#1C1C1C] h-screen '>
//   <Headers />
//   <TaskListNumbers />
// </div>
<div className='p-4 bg-[#1C1C1C] h-auto sm:h-screen sm:p-10'>
  
  <Headers className='text-sm sm:text-lg' data={data} /> {/* Text size smaller on phones */}
  <TaskListNumbers className='text-xs sm:text-base'  data={data}/> {/* Adjust font size for phones */}
  <TaskList data={data}/>
</div>


  )
}

export default EmployeeDashboard