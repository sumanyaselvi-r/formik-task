// BookList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);

  useEffect(() => {
    // Fetch books from your API and update the state
    axios.get('https://65704af509586eff66411157.mockapi.io/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleAddBook = (newBook) => {
    // Add new book to the API and update the state
    axios.post('https://65704af509586eff66411157.mockapi.io/books', newBook)
      .then(response => setBooks([...books, response.data]))
      .catch(error => console.error('Error adding book:', error));
  };

  const handleEditBook = (editedBook) => {
    // Edit book in the API and update the state
    axios.put(`https://65704af509586eff66411157.mockapi.io/books/${editedBook.id}`, editedBook)
      .then(() => {
        setBooks(books.map(book => (book.id === editedBook.id ? editedBook : book)));
        setEditingBookId(null);
      })
      .catch(error => console.error('Error editing book:', error));
  };

  const handleDeleteBook = (bookId) => {
    // Delete book from the API and update the state
    axios.delete(`https://65704af509586eff66411157.mockapi.io/books/${bookId}`)
      .then(() => setBooks(books.filter(book => book.id !== bookId)))
      .catch(error => console.error('Error deleting book:', error));
  };

  const handleEditClick = (bookId) => {
    setEditingBookId(bookId);
  };

  const handleCancelEdit = () => {
    setEditingBookId(null);
  };

  return (
  <>
    <div className='AuthorList'>
      <h2>Book List</h2>
      <ul style={{listStyle:'none'}}>
        {books.map(book => (
          <li key={book.id} className="AuthorItem">
            {editingBookId === book.id ? (
              <BookForm
                initialValues={book}
                onSubmit={handleEditBook}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
              <div style={{paddingLeft:'10px'}}>
                <div>Book title:{book.title}</div>
                <div>Book author:{book.author}</div>
                <div>Book ISBN:{book.ISBN}</div>
                <div>PublicationDate:{book.publicationDate}</div>
                <button className="EditButton" onClick={() => handleEditClick(book.id)}>Edit</button>
                <button className="DeleteButton" onClick={() => handleDeleteBook(book.id)} style={{paddingLeft:'20px',marginLeft:'20px'}}>Delete</button>
                </div>
              </>

            )}
          </li>
        ))}
      </ul>
    
      
      </div>
      <h2>Add New Book</h2>
      <BookForm initialValues={{ title: '', author: '', ISBN: '', publicationDate: '' }} onSubmit={handleAddBook} />
   
    </>
  );
};

export default BookList;
