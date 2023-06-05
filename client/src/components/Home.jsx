import React from 'react';
import CeraWorks from '../assets/cera_work.jpg'
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Calendly from '../components/pages/Calendly';
import NavTabs from '../components/NavTabs';

const Home = () => {


  return (
  <>
    <NavTabs />
    <div name='home' className='w-full h-screen bg-neutral-200 py-6 md:py-16 px-4 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 h-full grid md:grid-cols-2 gap-4'>
        <img className='w-[500px] mx-auto pt-20 md:pt-40 my-4 rounded' src={CeraWorks} alt=''/>
        <div className='flex flex-col justify-center'>
            <p className='text-zinc-950'>Welcome to</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#F38442]'>CeraWorks</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-slate-700'>Ceramic Services</h2>
            <p className='text-zinc-600 sm:py-4 max-w-[700px]'>CeraWorks Services serves the San Diego area by providing a top quality ceramic coat protector for your vehicle.
            With our mobile service we will travel to your place of work or residence to service your vehicle with ease. We provide many different services with affordable prices! </p>
          <div>
          </div>
          </div>
        </div>
    </div>
     <Services />
     <Reviews />
     <Contact />
     <Calendly />
    </>
  );
}

export default Home