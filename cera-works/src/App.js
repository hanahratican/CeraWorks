App.js
import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import { Login } from './components/pages/Login';
import { Signup } from './components/pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentPage(formName);

  const handlePageChange = (page) => setCurrentPage(page);
  }
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {
      currentPage === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default App;
