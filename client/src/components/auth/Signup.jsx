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

    const styles = {
        signup: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '30px',
        },
        boxes: {
            border: '1px solid black',
            borderRadius: '10px',
            margin: '10px',
            padding: '10px'
        },
        button: {
            color: '#F38442',
            background: '#gray',
            padding: '10px'
        }
    }

    return (
        <div style={styles.signup} className="auth-form-container">
            <h2>Create an Account:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input style={styles.boxes} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input style={styles.boxes} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="********" />
                <button style={styles.button} type="submit">Register</button>
            </form>
        </div>
    );
};

