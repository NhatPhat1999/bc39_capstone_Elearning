import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const {pathname}=useLocation();
  return (
    <footer id='footer' style={pathname==="/login"? {display:"none"}:{}}>Footer</footer>
  )
}
