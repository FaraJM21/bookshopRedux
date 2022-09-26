import React from 'react'
import {  useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {

  let isLoged = useSelector((state)=> state.isLoged);
  
   return isLoged.isLoged ? <Outlet/>:<Navigate to="/"/>
}

export default ProtectedRoutes;