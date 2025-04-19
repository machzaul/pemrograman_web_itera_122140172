import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { BookContext } from '../context/BookContext';

export default function EditBook() {
  const { index } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleEdit = (updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[index] = updatedBook;
    setBooks(updatedBooks);
    navigate('/');
  };

  // Ensure the book at the given index exists
  const bookToEdit = books[index];

  if (!bookToEdit) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Buku</h2>
      <BookForm initialData={bookToEdit} onSubmit={handleEdit} />
    </div>
  );
}
