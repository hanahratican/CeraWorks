import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';


const NavTabs = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-zinc-950 to-zinc-500 border-b border-neutral-200'>
      <div>
        <img src={Logo} alt='Cera Works logo' style={{width:"50px"}}></img>
      </div>
      
      {/* Navbar */}
        <ul className='hidden md:flex'>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>
          <RouterLink to="/">Home</RouterLink>
              </li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>
            <RouterLink to="/login">Login</RouterLink>
          </li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>
            <Link to='services' smooth={true} duration={500} offset={-70}>
              Services
              </Link>
              </li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>
            <Link to='reviews' smooth={true} duration={500} offset={-80}>
              Reviews
              </Link>
              </li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
              </Link>
              </li>
          <li className='text-[#F38442] hover:text-white hover:border-b border-[#F38442] hover:cursor-pointer'>Schedule</li>
        </ul>

      {/* Hamburger Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-500 flex flex-col justify-center items-center cursor-pointer opacity-80'}>
          <li className='py-6 text-4xl text-white'>
          <Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl text-white'>Login</li>
          <li className='py-6 text-4xl text-white'>
          <Link to='services' smooth={true} duration={500} offset={-70}>Services</Link></li>
          <li className='py-6 text-4xl text-white'>
          <Link to='reviews' smooth={true} duration={500} offset={-80}>Reviews</Link></li>
          <li className='py-6 text-4xl text-white'>
          <Link to='contact' smooth={true} duration={500}>Contact</Link></li>
          <li className='py-6 text-4xl text-white'>Schedule</li>
      </ul>
      
    </div>
  )
}

export default NavTabs