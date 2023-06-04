import React, { useState } from 'react';
import Home from './components/Home';
import NavTabs from './components/NavTabs';
import AuthDetails from './components/AuthDetails';
import ReviewsForm from './components/pages/ReviewsForm';
import './App.css';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Signup';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // if (currentPage === 'Login') {
    //   return <Login />;
    // }
    if (currentPage === 'Reviews') {
      return <ReviewsForm />;
    // }
    // if (currentPage === 'Services') {
    //   return <Services />;
    }
    return <div>
      <NavTabs />
      <Home />
      <Services />
      </div>
    ;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <ApolloProvider client={client}>
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      <AuthDetails />
      {renderPage()}
      <Login />
      <Signup />

    </div>
    </ApolloProvider>
  );
}

export default App;
