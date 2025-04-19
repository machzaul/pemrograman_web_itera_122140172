import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';



export default function App() {
  return (
    <BookProvider>
      <Router>
        <div className="container mx-auto p-6">
        <nav className="flex justify-between items-center mb-6 border-b pb-4">
          <Link to="/" className="text-2xl font-bold text-blue-800 hover:text-blue-900">
            📚 Buku Pribadi
          </Link>
          <Link
            to="/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Tambah Buku
          </Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:index" element={<EditBook />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}
