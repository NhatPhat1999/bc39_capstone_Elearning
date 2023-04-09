import React from 'react'
import Navbar from './_component/Navbar'
import Footer from './_component/Footer'
import {Outlet} from "react-router-dom"

export default function HomeTemplate() {
  return (
  <div>
          <Navbar />
          <Outlet />
          <Footer/>
  </div>
  )
}
