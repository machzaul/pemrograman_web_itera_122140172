// src/tests/FilterBar.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../components/FilterTabs'; // Ubah path jika berbeda

describe('FilterBar Component', () => {
  test('menampilkan input dan select dengan nilai default', () => {
    render(
      <FilterBar
        filterStatus="semua"
        setFilterStatus={jest.fn()}
        searchTerm=""
        setSearchTerm={jest.fn()}
      />
    );

    const select = screen.getByDisplayValue('📚 Semua Buku');
    const input = screen.getByPlaceholderText(/cari berdasarkan judul atau penulis/i);

    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('memanggil setFilterStatus saat select berubah', () => {
    const mockSetFilterStatus = jest.fn();

    render(
      <FilterBar
        filterStatus="semua"
        setFilterStatus={mockSetFilterStatus}
        searchTerm=""
        setSearchTerm={jest.fn()}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'baca' } });

    expect(mockSetFilterStatus).toHaveBeenCalledWith('baca');
  });

  test('memanggil setSearchTerm saat input berubah', () => {
    const mockSetSearchTerm = jest.fn();

    render(
      <FilterBar
        filterStatus="semua"
        setFilterStatus={jest.fn()}
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
      />
    );

    const input = screen.getByPlaceholderText(/cari berdasarkan judul atau penulis/i);
    fireEvent.change(input, { target: { value: 'Harry Potter' } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith('Harry Potter');
  });
});
