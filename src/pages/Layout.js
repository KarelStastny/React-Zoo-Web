import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from 'react'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return <>
    <Navbar/>
    <Outlet>
        
    </Outlet>
    <Footer/>
  
  
  
  </>
}

export default Layout
