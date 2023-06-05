import React, { useState } from 'react';
import Home from './components/Home';
import NavTabs from './components/NavTabs';
// import ReviewsForm from './components/pages/ReviewsForm';
import './App.css';
import Services from './components/Services';
import Calendly from './components/pages/Calendly';
import Login from './components/Login';
import Signup from './components/Signup';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Reviews from './components/Reviews';
import Contact from './components/Contact';




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  
  return (
    <ApolloProvider client={client}>
    <div>
      
      <NavTabs />
      <Home />
      <Services />
      <Reviews />
      <Contact />
      <Login />
      <Signup />
      <Calendly />
    </div>
  
    </ApolloProvider>
  );
}

export default App;
