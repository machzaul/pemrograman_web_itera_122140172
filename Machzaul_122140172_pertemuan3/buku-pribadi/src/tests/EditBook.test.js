import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import EditBook from '../pages/EditBook';


// Mock data buku
const mockBooks = [
  { title: 'Buku Lama', author: 'Penulis Lama', status: 'miliki' },
  { title: 'Buku Baru', author: 'Penulis Baru', status: 'baca' },
];

describe('EditBook', () => {
  const mockSetBooks = jest.fn();

  test('renders and displays book data correctly', () => {
    render(
      <MemoryRouter initialEntries={['/edit/0']}>
        <BookContext.Provider value={{ books: mockBooks, setBooks: mockSetBooks }}>
          <Routes>
            <Route path="/edit/:index" element={<EditBook />} />
          </Routes>
        </BookContext.Provider>
      </MemoryRouter>
    );

    // Check if initial values are rendered correctly
    expect(screen.getByPlaceholderText(/judul/i)).toHaveValue('Buku Lama');
    expect(screen.getByPlaceholderText(/penulis/i)).toHaveValue('Penulis Lama');
    
    // Instead of getByDisplayValue, let's use getByRole to find the select element
    const statusSelect = screen.getByRole('combobox'); // Combobox is the role for <select> elements
    expect(statusSelect).toHaveValue('miliki'); // Check if the selected value is 'miliki'
  });

  test('updates book data and submits the form', () => {
    render(
      <MemoryRouter initialEntries={['/edit/0']}>
        <BookContext.Provider value={{ books: mockBooks, setBooks: mockSetBooks }}>
          <Routes>
            <Route path="/edit/:index" element={<EditBook />} />
          </Routes>
        </BookContext.Provider>
      </MemoryRouter>
    );

    const titleInput = screen.getByPlaceholderText(/judul/i);
    const authorInput = screen.getByPlaceholderText(/penulis/i);
    const statusSelect = screen.getByRole('combobox');
    const submitButton = screen.getByRole('button', { name: /simpan/i });

    // Simulate user input
    fireEvent.change(titleInput, { target: { value: 'Buku Baru Edit' } });
    fireEvent.change(authorInput, { target: { value: 'Penulis Baru Edit' } });
    fireEvent.change(statusSelect, { target: { value: 'beli' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Ensure setBooks was called with the updated book data
    expect(mockSetBooks).toHaveBeenCalledWith([
      { title: 'Buku Baru Edit', author: 'Penulis Baru Edit', status: 'beli' },
      { title: 'Buku Baru', author: 'Penulis Baru', status: 'baca' },
    ]);
  });
});
