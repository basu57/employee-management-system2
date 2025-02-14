import React from 'react'
import { useState  } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Headers = (props) => {
    const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
 const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload();
 }

  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username</span></h1>
        <button  onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-s'>Log Out</button>
    </div>
  )
}

export default Headers