import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav'>
    <nav className="navbar">
        <img src='https://ik.imagekit.io/8pxyodyr4/imgwebkit/event/Momento-removebg-preview.png?updatedAt=1741151750102' className='nav-header'/>
        <div>
        <NavLink to='/' className='common1'>Home</NavLink>
        <NavLink to='/events' className='common1'>Events</NavLink>
        <NavLink to='/signup' className='common1'>Signup</NavLink>
        <NavLink to='/login' className='common1'>Login</NavLink>
        <NavLink to='/about' className='common1'>About</NavLink>
        <NavLink to='/admin' className='common1'>Admin</NavLink>
        </div>
    </nav>
    </div>
  )
}
