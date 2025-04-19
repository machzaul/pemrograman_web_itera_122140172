import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from '../components/BookCard';

describe('BookCard', () => {
  test('memanggil onDelete setelah konfirmasi', () => {
    const onDeleteMock = jest.fn();
    const book = {
      title: 'Test Book',
      author: 'John Doe',
      status: 'baca',
    };

    // Mock window.confirm untuk return true
    window.confirm = jest.fn(() => true);

    render(<BookCard book={book} onEdit={() => {}} onDelete={onDeleteMock} />);

    // Klik tombol Hapus
    fireEvent.click(screen.getByText(/Hapus/i));

    // Pastikan window.confirm dipanggil
    expect(window.confirm).toHaveBeenCalled();

    // Pastikan onDelete dipanggil setelah konfirmasi
    expect(onDeleteMock).toHaveBeenCalled();
  });

  test('tidak memanggil onDelete jika konfirmasi dibatalkan', () => {
    const onDeleteMock = jest.fn();
    const book = {
      title: 'Test Book',
      author: 'John Doe',
      status: 'baca',
    };

    // Mock window.confirm untuk return false (membatalkan)
    window.confirm = jest.fn(() => false);

    render(<BookCard book={book} onEdit={() => {}} onDelete={onDeleteMock} />);

    // Klik tombol Hapus
    fireEvent.click(screen.getByText(/Hapus/i));

    // Pastikan window.confirm dipanggil
    expect(window.confirm).toHaveBeenCalled();

    // Pastikan onDelete tidak dipanggil jika konfirmasi dibatalkan
    expect(onDeleteMock).not.toHaveBeenCalled();
  });
});
