import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ book, onEdit, onDelete }) => {
  const handleDelete = () => {
    // Konfirmasi penghapusan
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      onDelete(); // Panggil onDelete jika konfirmasi true
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold text-blue-900">{book.title}</h3>
      <p className="text-lg text-blue-700">{book.author}</p>
      <p className="text-md text-gray-600 mt-2">Status: <span className="font-semibold text-green-600">{book.status}</span></p>

      <div className="mt-4 flex justify-between">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={handleDelete} // Ganti ke handleDelete untuk menambahkan konfirmasi
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookCard;
