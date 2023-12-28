import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const API_URL = 'https://65704af509586eff66411157.mockapi.io/Authors'; 

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    // Fetch authors from API
    axios.get(API_URL).then((response) => setAuthors(response.data));
  }, []);

  const handleAuthorSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission (send data to API)
    if (selectedAuthor) {
      // Edit existing author
      axios.put(`${API_URL}/${selectedAuthor.id}`, values).then((response) => {
        setAuthors((prevAuthors) =>
          prevAuthors.map((author) => (author.id === response.data.id ? response.data : author))
        );
        resetForm();
        setSelectedAuthor(null);
      });
    } else {
      // Add new author
      axios.post(API_URL, values).then((response) => {
        setAuthors((prevAuthors) => [...prevAuthors, response.data]);
        resetForm();
      });
    }

    setSubmitting(false);
  };

  const handleEditAuthor = (author) => {
    setSelectedAuthor(author);
  };

  const handleDeleteAuthor = (authorId) => {
    // Handle delete author
    axios.delete(`${API_URL}/${authorId}`).then(() => {
      setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== authorId));
      setSelectedAuthor(null);
    });
  };

  return (
    <>
    
    <div className='AuthorList'>
 
      <h2>Author List</h2>
      <ul style={{listStyle:'none'}}>
      
        {authors.map(author=> (
          <li key={author.id} className="AuthorItem">
            {selectedAuthor === author.id ? (
              <AuthorForm
                initialValues={author}
                onSubmit={handleEditAuthor}
                onCancel={handleDeleteAuthor}
              />
            ) : (
              <>
              <div style={{paddingLeft:'10px'}}>
          <div className="AuthorName">{author.name}</div>
            <div>Born: {author.birthDate}</div>
            <p className="AuthorBiography">Biography:{author.biography}</p>
            <button  className="EditButton" onClick={() => handleEditAuthor(author.id)}>Edit</button>
            <button className="DeleteButton" onClick={() => handleDeleteAuthor(author.id)} style={{paddingLeft:'20px',marginLeft:'20px'}}>Delete</button>
            </div>
              </>

            )}
                </li>
        ))}

       
      </ul>
   
    </div>
    <h2> Add new Author</h2>
      <AuthorForm
        initialValues={selectedAuthor || { name: '', birthDate: '', biography: '' }}
        onSubmit={handleAuthorSubmit}
      />
    
      </>
  );
};

export default AuthorList;
