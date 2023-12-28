import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Library Management System</h1>
      <div style={navContainerStyle}>
        <Link to="/authors" style={navLinkStyle}>
          <div style={navItemStyle}>
            <span role="img" aria-label="Authors">
              📚
            </span>
            <p>Authors</p>
          </div>
        </Link>
        <Link to="/books" style={navLinkStyle}>
          <div style={navItemStyle}>
            <span role="img" aria-label="Books">
              📘
            </span>
            <p>Books</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const homeStyle = {
  width:'100%',
  
  margin: 'auto',
  padding: '20px',
  textAlign: 'center',
  backgroundColor:'skyblue'
  
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const navItemStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  minWidth: '150px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  backgroundColor: '#f8f8f8',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export default Home;
