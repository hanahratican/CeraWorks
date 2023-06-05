import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../utils/auth';
import NavTabsLogin from './NavTabsLogin';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    
    <>
    <NavTabsLogin />
    <main className="flex justify-center items-center h-screen bg-neutral-200">
      <div className="w-96 p-6 shadow-lg bg-zinc-900 rounded-md">
        <div className="card">
          <h4 className="text-3xl mr-3 block text-center font-semibold text-neutral-200">
            <FontAwesomeIcon icon={faUser} style={{color: "#f38442", width:"50px"}}/>
            Log In
            </h4>
            <a className='mt-3 block text-center text-neutral-200'>Welcome Back! Log In with your credentials</a>
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
                <p className='mt-3 block text-center text-neutral-200'>Don't have an account? <RouterLink className='text-[#f38442] font-semibold hover:text-neutral-200' to="/signup">Sign Up</RouterLink></p>
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
    </>
  );
};

export default Login;
