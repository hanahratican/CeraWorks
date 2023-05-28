import React, { useState } from 'react';
import Home from './components/Home';
import NavTabs from './components/NavTabs';
import { Login } from './components/auth/Login';
// import { Signup } from './components/auth/Signup';
import AuthDetails from './components/AuthDetails';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Reviews') {
      return <Reviews />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      <AuthDetails />
      {renderPage()}

    </div>
  );
}

export default App;
