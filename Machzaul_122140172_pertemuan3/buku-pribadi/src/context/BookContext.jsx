import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', []);
  const [books, setBooks] = useState(storedBooks);

  useEffect(() => {
    setStoredBooks(books);
  }, [books]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
