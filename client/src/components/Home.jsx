import React from 'react';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Calendly from '../components/pages/Calendly';


const Home = () => {


  return (
    <>
    <div name='home' className='w-full h-screen bg-neutral-200'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-zinc-950'>Welcome to</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#F38442]'>CeraWorks</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-slate-700'>Ceramics Services</h2>
            <p className='text-zinc-600 py-4 max-w-[700px]'>CeraWorks Services serves the San Diego by providing a top quality ceramic coat protector for your vehicle.
            With our mobile service we will travel to your place of work or residence to service your vehicle with ease. We provide many different services with affordable prices! </p>
          <div>
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