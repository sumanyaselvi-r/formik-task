
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch books from the mock API when the component mounts
    axios.get('https://65704af509586eff66411157.mockapi.io/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleEditBook = (bookId) => {
    setSelectedBook(bookId);
  };

  const handleDeleteBook = (bookId) => {
    axios.delete(`https://65704af509586eff66411157.mockapi.io/books/${bookId}`)
      .then(() => {
        setBooks(books.filter(book => book.id !== bookId));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  const handleEditClick = (editedBook) => {
    axios.put(`https://65704af509586eff66411157.mockapi.io/books/${editedBook.id}`, editedBook)
      .then(() => {
        setBooks(books.map(book =>
          book.id === editedBook.id ? editedBook : book
        ));
        setSelectedBook(null); // Reset selectedBook after editing
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  const handleCancelEdit = () => {
    setSelectedBook(null); // Reset selectedBook on cancel
  };
  const handleAddBook = (newBook) => {
    // Add new book to the API and update the state
    axios.post('https://65704af509586eff66411157.mockapi.io/books', newBook)
      .then(response => setBooks([...books, response.data]))
      .catch(error => console.error('Error adding book:', error));
  };


  return (
    <>
    <div className='AuthorList'>
      <h2>Book List</h2>
      <ul className="book-list" style={{listStyle:'none'}}>
        {books.map((book) => (
          <li key={book.id} className="AuthorItem">
            {selectedBook === book.id ? (
              <BookForm
                initialValues={book}
                onSubmit={handleEditClick}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <div style={{ paddingLeft: '10px' }}>
                  <div className="BookTitle">{book.title}</div>
                  <div>Author: {book.author}</div>
                  <div>Published: {book.publishedDate}</div>
                  <p className="BookDescription">Description: {book.description}</p>
                  <button
                    className="EditButton"
                    onClick={() => handleEditBook(book.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="DeleteButton"
                    onClick={() => handleDeleteBook(book.id)}
                    style={{ paddingLeft: '20px', marginLeft: '20px' }}
                  >
                    Delete
                  </button>
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
