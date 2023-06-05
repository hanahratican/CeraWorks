import React from 'react'
import NavTabsLogin from './NavTabsLogin';
import Signup from './Signup';
import Login from './Login'

const LoginPage = () => {
  return (
    <div>
        <NavTabsLogin />
        <Signup />
        <Login />
    </div>
  )
}

export default LoginPage