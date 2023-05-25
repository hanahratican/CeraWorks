import React from 'react'
import {FaBars, FaTimes} from 'react-icons'
// import Logo from '../assets/logo.png'


const NavTabs = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-700 text-white'>
      <div>
        {/* <img src={Logo} alt='Cera Works logo' style={{width:"50px"}}></img> */}
      </div>
      
      {/* Navbar */}
      <div>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger Menu*/}
      <div className='hidden'>
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className='hidden'>
      <li>Home</li>
          <li>Login</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact</li>
      </ul>
      
    </div>
  )
}

export default NavTabs