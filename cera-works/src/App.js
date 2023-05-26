import React from 'react';
import Home from './components/Home';
import NavTabs from './components/NavTabs';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import AuthDetails from './components/AuthDetails';
import './App.css';

function App() {
  
  return (
    <div>
      
      <NavTabs />
      <Login />
      <Signup />
      <AuthDetails />
      <Home />

    </div>
  );
}

export default App;
