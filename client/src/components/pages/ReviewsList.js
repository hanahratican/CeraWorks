import React from 'react';


const ReviewsList = ({ reviews }) => {
//   if (!reviews.length) {
//     return <h3>No Reviews Yet</h3>;
//   }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {review.name} <br />
              {/* <span style={{ fontSize: '1rem' }}>
                had this thought on {thought.createdAt}
              </span> */}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewsList;