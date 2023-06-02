import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'


const NavTabs = ({ handlePageChange }) => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-zinc-950 to-zinc-500 border-b border-neutral-200'>
      <div>
        <img src={Logo} alt='Cera Works logo' style={{width:"50px"}}></img>
      </div>
      
      {/* Navbar */}
        <ul className='hidden md:flex'>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer' href="#home" onClick={() => handlePageChange('Home')}>Home</li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer' href="/auth/login" onClick={() => handlePageChange('Login')}>Login</li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>Services</li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer' href="/reviews" onClick={() => handlePageChange('Reviews')}>Reviews</li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>Contact</li>
        </ul>

      {/* Hamburger Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-500 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl text-white'>Home</li>
          <li className='py-6 text-4xl text-white'>Login</li>
          <li className='py-6 text-4xl text-white'>Services</li>
          <li className='py-6 text-4xl text-white'>Reviews</li>
          <li className='py-6 text-4xl text-white'>Contact</li>
      </ul>
      
    </div>
  )
}

export default NavTabs