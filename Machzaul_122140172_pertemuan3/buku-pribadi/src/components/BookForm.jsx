import { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [status, setStatus] = useState(initialData.status || 'miliki');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('Judul dan Penulis wajib diisi!');
      return;
    }
    onSubmit({ title, author, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600">{error}</div>}
      <input type="text" placeholder="Judul" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Penulis" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full p-2 border rounded" />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded">
        <option value="miliki">Miliki</option>
        <option value="baca">Baca</option>
        <option value="beli">Beli</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simpan</button>
    </form>
  );
};

BookForm.propTypes = {
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default BookForm;
