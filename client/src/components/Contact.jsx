import React from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <footer name='contact' className='w-full h-[350px] flex justify-between items-center px-4 bg-gradient-to-r from-zinc-950 to-zinc-500 border-b border-neutral-200'>
        <div>
            <img src={Logo} alt='Cera Works logo' style={{width:"50px"}}></img>
        </div>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                <FontAwesomeIcon className='md:animate-bounce' icon={faAddressCard} style={{color: "#f38442", width:"50px", scale:"3"}}/><a className='pl-3 text-neutral-200 underline underline-offset-4 decoration-4  decoration-[#F38442]'>Misael lopez</a>
                </div>
                <div>
                <FontAwesomeIcon className='md:animate-bounce' icon={faPhone} style={{color: "#f38442", width:"50px", scale:"3"}}/><a className='pl-3 text-neutral-200 underline underline-offset-4 decoration-4  decoration-[#F38442]'>619-848-4199</a>
                </div>
                <div>
                <FontAwesomeIcon className='md:animate-bounce' icon={faEnvelope} style={{color: "#f38442", width:"50px", scale:"3"}}/><a className='pl-3 text-neutral-200 underline underline-offset-4 decoration-4  decoration-[#F38442]'>verzalopezdesigns@gmail.com</a>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Contact