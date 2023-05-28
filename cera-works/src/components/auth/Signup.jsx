import { createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="********" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

