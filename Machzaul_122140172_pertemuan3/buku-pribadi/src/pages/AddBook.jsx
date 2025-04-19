import { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('miliki');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = { title, author, status };
      setBooks([...books, newBook]);
      navigate('/');
    } else {
      alert('Judul dan Penulis tidak boleh kosong');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">Tambah Buku Baru</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Judul Buku</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm"
              placeholder="Masukkan judul buku"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Penulis</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm"
              placeholder="Masukkan nama penulis"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm"
            >
              <option value="miliki">Miliki</option>
              <option value="baca">Sedang Dibaca</option>
              <option value="beli">Ingin Dibeli</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Tambah Buku
          </button>
        </form>
      </div>
    </div>
  );
}
