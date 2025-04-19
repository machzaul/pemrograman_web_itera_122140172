import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const useFilteredBooks = (status) => {
  const { books } = useContext(BookContext);
  return status ? books.filter((book) => book.status === status) : books;
};

export default useFilteredBooks;
