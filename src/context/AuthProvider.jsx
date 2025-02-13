import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const  AuthContext=createContext();

const AuthProvider = ({children}) => {
    
    const [userData, setUserData] = useState(null);
    // const data = getLocalStorage();
    // console.log(data);
    useEffect(() => {
       
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
        setLocalStorage();
    }, [])
  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
     </div>
  )
}

export default AuthProvider