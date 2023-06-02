import React from 'react'

const Services = () => {
  return (
    <div name='services' className='w-full h-screen bg-zinc-800 text-white'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#F38442]'>Services</p>
                <p className='py-4'>Thank you for considering our ceramic coating services for your vehicle. Please note that 
                    actual prices may vary based on the size and condition of the vehicle, and specific 
                    service requirements. We recommend contacting us directly for a personalized quote. </p>
            </div>
                {/* Icon Container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service1' />
                    <p></p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service2' />
                    <p></p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service3' />
                    <p></p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service4' />
                    <p></p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service5' />
                    <p></p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt='service6' />
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services