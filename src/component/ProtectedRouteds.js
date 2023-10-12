import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import FooterSection from './FooterSection'

const ProtectedRouteds = ({authentication , children}) => {
    
  if (!authentication) {
    return <Navigate to={"/login"}/>
  }
  return <Outlet/>
}


export default ProtectedRouteds;
