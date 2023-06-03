import React from 'react'
import ReviewsForm from './pages/ReviewsForm'
import ReviewsList from './pages/ReviewsList'

const Reviews = () => {
  return (
    <div name='reviews' className='w-full h-full bg-neutral text-zinc-950 bg-neutral-200'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#F38442]'>Reviews</p>
                <p className='py-4'>We have some of the best clients in the planet. Here are some of the great reviews they've given us.  </p>
            </div>
                
                {/*  Card Container */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6'>
                <div className='bg-zinc-800 text-neutral-200 shadow-md shadow-[#040c16] xl:hover:scale-110 duration-500 rounded xl:col-span-2'>
                    <div className='font-bold text-xl mb-2 text-center py-3 text-[#F38442]'>Customer's Name</div>
                    <p className='py-1 text-sm text-center'>                        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, elit sit amet mollis auctor, lorem mauris ultrices ante, non tincidunt magna ex non libero. 
                    Suspendisse eget cursus nisi. Nulla dignissim bibendum ipsum. Curabitur nunc risus, placerat vel ullamcorper suscipit, ornare ut erat. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Pellentesque euismod nisi in diam luctus, in faucibus leo interdum. Nunc at vulputate mauris. Nulla lobortis metus enim, ut tincidunt magna vulputate ut. 
                    Maecenas rutrum imperdiet molestie. Sed viverra eu metus posuere fringilla. Integer tellus ligula, semper ut arcu eget, bibendum sollicitudin orci. 
                    </p>
                </div>
                <div className='bg-zinc-800 text-neutral-200 shadow-md shadow-[#040c16] xl:hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3 text-[#F38442]'>Customer's Name</div>
                    <p className='py-1 text-sm text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, elit sit amet mollis auctor, lorem mauris ultrices ante, non tincidunt magna ex non libero. 
                    Suspendisse eget cursus nisi. Nulla dignissim bibendum ipsum. Curabitur nunc risus, placerat vel ullamcorper suscipit, ornare ut erat. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Pellentesque euismod nisi in diam luctus, in faucibus leo interdum. Nunc at vulputate mauris. Nulla lobortis metus enim, ut tincidunt magna vulputate ut. 
                    Maecenas rutrum imperdiet molestie. Sed viverra eu metus posuere fringilla. Integer tellus ligula, semper ut arcu eget, bibendum sollicitudin orci.
                    </p>
                </div>
                <div className='bg-zinc-800 text-neutral-200 shadow-md shadow-[#040c16] xl:hover:scale-110 duration-500 rounded'>
                    <div className='font-bold text-xl mb-2 text-center py-3 text-[#F38442]'>Customer's Name</div>
                    <p className='py-1 text-sm text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, elit sit amet mollis auctor, lorem mauris ultrices ante, non tincidunt magna ex non libero. 
                    Suspendisse eget cursus nisi. Nulla dignissim bibendum ipsum. Curabitur nunc risus, placerat vel ullamcorper suscipit, ornare ut erat. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Pellentesque euismod nisi in diam luctus, in faucibus leo interdum. Nunc at vulputate mauris. Nulla lobortis metus enim, ut tincidunt magna vulputate ut. 
                    Maecenas rutrum imperdiet molestie. Sed viverra eu metus posuere fringilla. Integer tellus ligula, semper ut arcu eget, bibendum sollicitudin orci.
                    </p>
                </div>
                <div className='bg-zinc-800 text-neutral-200 shadow-md shadow-[#040c16] xl:hover:scale-110 duration-500 rounded xl:col-span-2'>
                    <div className='font-bold text-xl mb-2 text-center py-3 text-[#F38442]'>Customer's Name</div>
                    <p className='py-1 text-sm text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, elit sit amet mollis auctor, lorem mauris ultrices ante, non tincidunt magna ex non libero. 
                    Suspendisse eget cursus nisi. Nulla dignissim bibendum ipsum. Curabitur nunc risus, placerat vel ullamcorper suscipit, ornare ut erat. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Pellentesque euismod nisi in diam luctus, in faucibus leo interdum. Nunc at vulputate mauris. Nulla lobortis metus enim, ut tincidunt magna vulputate ut. 
                    Maecenas rutrum imperdiet molestie. Sed viverra eu metus posuere fringilla. Integer tellus ligula, semper ut arcu eget, bibendum sollicitudin orci.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews