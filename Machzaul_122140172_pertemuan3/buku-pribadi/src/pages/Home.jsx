import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterTabs';

export default function Home() {
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const [filterStatus, setFilterStatus] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    if (window.confirm('Yakin ingin menghapus buku ini?')) {
      const updatedBooks = [...books];
      updatedBooks.splice(index, 1);
      setBooks(updatedBooks);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchStatus = filterStatus === 'semua' || book.status === filterStatus;
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-1000 p-6 rounded-lg">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-5xl font-bold text-center text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          📚 Buku Pribadiku
        </motion.h1>

        <motion.p
          className="text-center text-lg text-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Kelola koleksi bukumu dengan mudah. Tambahkan, edit, filter, dan cari buku favoritmu!
        </motion.p>

        {/* Tombol Tambah Buku */}
        <div className="text-center">
          <button
            onClick={() => navigate('/add')}
            className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            + Tambah Buku Baru
          </button>
        </div>

        {/* Filter dan Search */}
        <FilterBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Daftar Buku */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {filteredBooks.length === 0 ? (
            <div className="col-span-full text-center text-xl text-blue-600">
              <p>Tidak ditemukan buku dengan filter/pencarian saat ini.</p>
            </div>
          ) : (
            filteredBooks.map((book, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BookCard
                  book={book}
                  onEdit={() => navigate(`/edit/${index}`)}
                  onDelete={() => handleDelete(index)}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
