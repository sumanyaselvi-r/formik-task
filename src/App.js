

import React from 'react';
import {  Route,  Routes } from 'react-router-dom';
import AuthorList from './Author';
import BookList from './Book';
import './App.css';  


import AuthorDashboard from './AuthorDashboard';
import BookDashboard from './Bookdasboard';
import Home from './Navbar';

function App() {
  return (
  <>
      
      
      <Home/>
  <Routes>
  
    <Route path='/authors' element={
     <AuthorDashboard/>
    }/>
    <Route path='/books' element={
    <BookDashboard/>
    }/>
     
    <Route path='/authorslist' element={<AuthorList/>}/>
  

        </Routes>
      

</>
  );
}

export default App;
