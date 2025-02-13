import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {
 console.log(handleLogin);


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const  SubmitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password);
        console.log(email);
        console.log(password);
        setemail("");
        setpassword("");
       }
  return (
    
    <div className ='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emarald-600 p-20 rounded-xl '>
            <form onSubmit={(e)=>{
                SubmitHandler(e)
            }} className='flex flex-col items-center justify-center'>
               <input  value={email} onChange={(e)=>{
                setemail(e.target.value);
               }} className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full  text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='enter your email'></input>
               <input value={password} onChange={(e)=>{
                setpassword(e.target.value);
               }} className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full  text-xl  mt-3 py-3 px-5 placeholder:text-gray-400' type="password" placeholder='enter your password'></input>
               <button className='text-white outline-none border-2 bg-emerald-600 rounded-full  text-xl py-3 px-5 mt-5 border-none  placeholder:text-white'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login