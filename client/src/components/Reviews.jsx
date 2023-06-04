import React from 'react'
import { useQuery } from '@apollo/client';
import ReviewsForm from './pages/ReviewsForm'
import ReviewsList from './pages/ReviewsList'
import { QUERY_REVIEWS } from '../utils/queries';

const Reviews = () => {
  const { loading,data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
    
  return (
    <div name='reviews' className='w-full h-full bg-neutral text-zinc-950 bg-neutral-200'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
                
                {/*  Card Container */}
            <ReviewsForm />
                <div className="col-12 col-md-8 mb-3">
                    {loading ? (
                <div>Loading...</div>
                ) : (
                <ReviewsList
                    reviews={reviews}
                    title="Some Feed for Thought(s)..."
                />
                )}
                </div>
        </div>
    </div>
  )
}

export default Reviews