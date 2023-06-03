import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../../utils/mutations';

const ReviewsForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    comment: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up our mutation with an option to handle errors
  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addReview({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'comment' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'comment') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Feel free to leave a review!</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="comment"
            placeholder="Leave a review here..."
            value={formState.comment}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="name"
            placeholder="Add your name here..."
            value={formState.name}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Review
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewsForm;



// import React, { useState } from 'react';
// import { FaCarSide } from 'react-icons/fa';

// export default function Reviews() {

//     const stars= Array(5).fill(0);
//     const [currentValue, setCurrentValue] = useState(0);
//     const [hoverValue, setHoverValue] = useState(undefined);

//     const handleClick = value => {
//         setCurrentValue(value);
//     };

//     const handleMouseOver = value => {
//         setHoverValue(value);
//     };

//     const handleMouseLeave = () => {
//         setHoverValue(undefined);
//     };

//     const styles = {
//         container: {
//             paddingTop: '20vh',
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center"
//         },
//         textarea: {
//             border: "1px solid #a9a9a9",
//             borderRadius: 5,
//             width: 300,
//             margin: "20px 0",
//             minHeight: 100,
//             padding: 10
//         },
//         button: {
//             border: "1px solid #a9a9a9",
//             borderRadius: 5,
//             width: 300,
//             padding: 10
//         },
//         stars: {
//             display: "flex",
//             flexDirection: "row",
//         },
//         name: {
//             border: "1px solid #a9a9a9",
//             borderRadius: 5,
//             width: 300,
//             margin: "10px 0",
//             padding: 5
//         }
//     };

//     return (
//       <div style={styles.container}>
//         <h1>Reviews</h1>
//         <div style={styles.stars}>
//             {stars.map((_, index) => {
//                 return (
//                     <FaCarSide 
//                     key={index}
//                     size={24}
//                     style={{
//                         marginRight: 10,
//                         cursor: "pointer"
//                     }}
//                     color={hoverValue || currentValue > index ? "#ffc107" : "#bfbfbf"}
//                     onClick={() => handleClick(index + 1)}
                    
//                     />
//                 )
//             })}
//         </div>
//         <textarea
//         placeholder='Please leave a review'
//         style={styles.textarea}
//         />
//         <input placeholder='Name' style={styles.name} />
//         <button style={styles.button}>Submit</button>
//       </div>
//     );
// }