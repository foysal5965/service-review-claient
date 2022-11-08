import React, { useContext } from "react";
import { AuthContext } from "../components/contexts/AuthProvider";
import {useLocation, Navigate} from 'react-router-dom'
const PrivetRoute=({children})=>{
    const{user,loading}= useContext(AuthContext)
    const location= useLocation()
        if(loading){
            return <h4>loading...</h4>
        }
      if(user){
        return children
      }
      return <Navigate to='/login' state={{from :location}} replace></Navigate>
    
}
export default PrivetRoute;