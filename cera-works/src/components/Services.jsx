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
                {/*  Container */}
            <div className='w-full grid grid-cols-2 gap-4 py-8'>
                <div className='bg-neutral-200 text-zinc-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3'>Basic Package <span className='text-[#F38442]'>$1,000</span></div>
                    <ul className='max-w-md space-y-1 list-disc list-inside py-1'>                        
                        <li>Single layer of ceramic coating for added protection and shine.</li>
                        <li>Hand wash and prep of the vehicle's exterior.</li>
                        <li>Application of ceramic coating to painted surfaces.</li>
                        <li>Basic surface decontamination.</li>
                        <li>Duration: Up to 2 years of protection.</li>
                    </ul>
                </div>
                <div className='bg-neutral-200 text-zinc-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3'>Standard Package <span className='text-[#F38442]'>$1,500</span></div>
                    <ul className='max-w-md space-y-1 list-disc list-inside py-1'>
                        <li>Two layers of ceramic coating for enhanced durability and gloss.</li>
                        <li>Hand wash and prep of the vehicle's exterior.</li>
                        <li>Application of ceramic coating to painted surfaces and trim.</li>
                        <li>Paint decontamination and light paint correction (removing minor swirl marks 
                            and imperfections)
                        </li>
                        <li>Duration: Up to 3.5 years of protection.</li>
                    </ul>
                </div>
                <div className='bg-neutral-200 text-zinc-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3'>Premium Package <span className='text-[#F38442]'>$2.000</span></div>
                    <ul className='max-w-md space-y-1 list-disc list-inside py-1'>                        
                        <li>Two layers of ceramic coating for maximum protection and gloss.</li>
                        <li>Hand wash, clay bar treatment, and prep of the vehicle's exterior.</li>
                        <li>Application of ceramic coating to painted surfaces, wheels, and trim. </li>
                        <li>Extensive paint correction to remove swirl marks, scratches, and imperfections.</li>
                        <li>Glass coating for improved visibility and water repellency. </li>
                        <li>Duration: Up to 5 years of protection.</li></ul>
                </div>
                <div className='bg-neutral-200 text-zinc-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3'>Additional Services</div>
                    <ul className='max-w-md space-y-1 list-disc list-inside py-1'>                        
                        <li>Interior Ceramic application on Leather <span className='text-[#F38442] font-bold'>$350</span></li>
                        <li>Hand wash, clay bar treatment, and prep of the vehicle's exterior.</li>
                        <li>Application of ceramic coating to painted surfaces, wheels, and trim. </li>
                        <li>Extensive paint correction to remove swirl marks, scratches, and imperfections.</li>
                        <li>Glass coating for improved visibility and water repellency. </li>
                        <li>Duration: Up to 5 years of protection.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services