import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-neutral-200">
      <div className="w-96 p-6 shadow-lg bg-zinc-900 rounded-md">
        <div className="card">
        <h4 className="text-3xl block text-center font-semibold text-neutral-200">
          <FontAwesomeIcon icon={faUser} style={{color: "#f38442", width:"50px"}}/>
          Sign Up
          </h4>
          <div className="card-body mt-3">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className='mt-3' onSubmit={handleFormSubmit}>
                <label className='"block mb-2 text-neutral-200 text-xl'>Email</label>
                <input
                  className="mt-3 form-input border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label className=' mt-3 block mb-2 text-neutral-200 text-xl'>Password</label>
                <input
                  className="mt-3 form-input border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary mt-5 border-2 border-[#f38442] bg-[#f38442] text-neutral-200 py-1 w-full rounded-md hover:bg-transparent hover:text-[#f38442] font-semibold"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
