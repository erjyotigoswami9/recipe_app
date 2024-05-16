import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-between" , marginLeft:"20px" , marginRight:"20px" , marginBottom:"20px" , fontSize:"30px" }}>
    <NavLink to='/' style={({isActive})=> isActive==true ? {color: "red",marginTop:"15px"} : {color : "black" , marginTop:"15px"}}  >Home</NavLink>
    <NavLink to='/login' style={({isActive})=> isActive==true ? {color:"red", marginTop:"15px"} : {color:"black", marginTop:"15px"}} >Login</NavLink>
    <NavLink to='/create' style={({isActive})=> isActive==true ? {color:"red", marginTop:"15px"} : {color:"black", marginTop:"15px"}}>Create Reciepe</NavLink>
    </div>
  )
}
