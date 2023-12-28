import React from 'react';
import AuthorForm from './AuthorForm';

import AuthorList from './Author';

const AuthorDashboard = () => {
  return (
    <div style={dashboardStyle}>
      <h1 style={headerStyle}>Author Dashboard</h1>
     
      <AuthorList />
      
    </div>
  );
};

const dashboardStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
};

export default AuthorDashboard;
