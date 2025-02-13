import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
    <form className='flex w-full flex-wrap items-start  justify-between '>
        <div className='w-1/2'>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input type='text' placeholder='Make UI Design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] '/>
        </div>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input type='date' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] '/>
        </div>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input type='text' placeholder='employee name ' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
        </div>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input type='text' placeholder='design,dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
        </div>
        </div>
        
        <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea name='' id='' cols={30} rows={10} className=' w-full h-44 text-sm py-2 px-4 rounded  bg-transparent border[1px] border-gray-400'></textarea>
        </div>
        
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    </form>
</div>
  )
}

export default CreateTask