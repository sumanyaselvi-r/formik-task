import React from 'react';
import BookForm from './BookForm';

import BookList from './Book';

const BookDashboard = () => {
 
    return (
    <div style={dashboardStyle}>
      <h1 style={headerStyle}>Book Dashboard</h1>
     
      <BookList  />
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

export default BookDashboard;
