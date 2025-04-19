import { render, screen, fireEvent } from '@testing-library/react';
import AddBook from '../pages/AddBook';  // Path ke komponen Anda
import { BookContext } from '../context/BookContext';  // Pastikan untuk mengimport konteks yang sesuai
import { MemoryRouter } from 'react-router-dom';

describe('AddBook', () => {
  it('menampilkan alert jika input kosong', () => {
    // Mocking window.alert
    window.alert = jest.fn();

    const books = [];
    const setBooks = jest.fn();

    // Render komponen dengan provider context dan MemoryRouter
    render(
      <BookContext.Provider value={{ books, setBooks }}>
        <MemoryRouter>
          <AddBook />
        </MemoryRouter>
      </BookContext.Provider>
    );

    // Simulasikan klik tombol untuk submit form tanpa mengisi judul dan penulis
    fireEvent.click(screen.getByRole('button', { name: /tambah buku/i }));

    // Verifikasi bahwa alert muncul dengan pesan yang benar
    expect(window.alert).toHaveBeenCalledWith('Judul dan Penulis tidak boleh kosong');
  });

  it('menampilkan error jika input judul atau penulis kosong', () => {
    // Mocking window.alert
    window.alert = jest.fn();

    const books = [];
    const setBooks = jest.fn();

    // Render komponen dengan provider context dan MemoryRouter
    render(
      <BookContext.Provider value={{ books, setBooks }}>
        <MemoryRouter>
          <AddBook />
        </MemoryRouter>
      </BookContext.Provider>
    );

    // Simulasikan klik tombol untuk submit form tanpa mengisi judul dan penulis
    fireEvent.click(screen.getByRole('button', { name: /tambah buku/i }));

    // Verifikasi bahwa alert muncul dengan pesan yang benar
    expect(window.alert).toHaveBeenCalledWith('Judul dan Penulis tidak boleh kosong');
  });
});
