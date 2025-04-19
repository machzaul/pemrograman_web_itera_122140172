import PropTypes from 'prop-types';

export default function FilterBar({ filterStatus, setFilterStatus, searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
      <select
        onChange={(e) => setFilterStatus(e.target.value)}
        value={filterStatus}
        className="px-4 py-2 border rounded-lg w-full sm:w-1/3"
      >
        <option value="semua">📚 Semua Buku</option>
        <option value="miliki">✔️ Dimiliki</option>
        <option value="baca">📖 Dibaca</option>
        <option value="beli">🛒 Ingin Dibeli</option>
      </select>

      <input
        type="text"
        placeholder="🔍 Cari berdasarkan judul atau penulis..."
        className="px-4 py-2 border rounded-lg w-full sm:w-2/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

FilterBar.propTypes = {
  filterStatus: PropTypes.string.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
