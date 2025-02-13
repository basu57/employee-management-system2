import React, { useContext, useEffect } from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'




const App = () => {
// useEffect(() => {
//  getLocalStorage();
//   },
// )
const [user, setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData=useContext(AuthContext);

useEffect(() => {

  const loggedInUser=localStorage.getItem('loggedInUser');
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(loggedInUser.role)
    setLoggedInUserData(userData.data)
  }
 


},[] );



const handleLogin = ( email,password)=>{
  if(email=='admin@me.com' && password=='123'){
    console.log('This is an Admin');

    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  }
  else if(authData){
    const employee=authData.employees.find((e)=>email==e.email && password==e.password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
    }
    console.log('This is an user')
 
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data:employee}))
  }
  else{
    alert('This is an employee');
  }
}

const data=useContext(AuthContext);




  return (
    <>
  {!user ? <Login  handleLogin={handleLogin}/>:' '}
   {user=='admin' ? <AdminDashboard/>: ( user == 'employee' ? <EmployeeDashboard data={loggedInUserData} />:null ) }
    </>
  )

}
export default App