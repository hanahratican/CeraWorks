import React from 'react';


export const ReviewsList = ({ reviews }) => {
//   if (!reviews.length) {
//     return <h3>No Reviews Yet</h3>;
//   }

  return (
    <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
      <p className='text-4xl font-bold inline border-b-4 border-[#F38442]'>Reviews</p>
      <p className='py-4'>We have some of the best clients in the planet. Here are some of the great reviews they've given us.  </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="'w-full gap-4 py-6">
            <div className='bg-zinc-800 text-neutral-200 shadow-md shadow-[#040c16] xl:hover:scale-110 duration-500 rounded'>
            <p className="font-bold text-xl mb-2 text-center py-3 text-[#F38442]">
              {review.name} <br />
            </p>
              <div className="py-1 text-sm text-center">
                <p>{review.comment}</p>
              </div>
            </div>
          </div>

          

        ))}
        </div>
    </div>
  );
};

export default ReviewsList;