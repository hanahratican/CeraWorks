import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'


const NavTabs = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-zinc-300 to-orange-500 text-white'>
      <div>
        <img src={Logo} alt='Cera Works logo' style={{width:"50px"}}></img>
      </div>
      
      {/* Navbar */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Login</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Login</li>
          <li className='py-6 text-4xl'>Services</li>
          <li className='py-6 text-4xl'>Reviews</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>
      
    </div>
  )
}

export default NavTabs