import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookForm from '../components/BookForm'; // Sesuaikan dengan path komponen Anda

test('render form dengan nilai default', () => {
  render(<BookForm onSubmit={() => {}} />);

  // Pastikan input judul dan penulis kosong
  expect(screen.getByPlaceholderText(/judul/i)).toHaveValue('');
  expect(screen.getByPlaceholderText(/penulis/i)).toHaveValue('');
  // Pastikan status memiliki nilai default "miliki"
  expect(screen.getByRole('combobox')).toHaveValue('miliki');
});

test('render form dengan initial data', () => {
  const initialData = { title: 'Buku Test', author: 'Penulis Test', status: 'baca' };
  render(<BookForm initialData={initialData} onSubmit={() => {}} />);

  // Pastikan input judul dan penulis terisi dengan initial data
  expect(screen.getByPlaceholderText(/judul/i)).toHaveValue(initialData.title);
  expect(screen.getByPlaceholderText(/penulis/i)).toHaveValue(initialData.author);
  // Pastikan status terpilih dengan nilai yang benar
  expect(screen.getByRole('combobox')).toHaveValue(initialData.status);
});

test('tampilkan pesan error jika input kosong dan submit', async () => {
  render(<BookForm onSubmit={() => {}} />);

  fireEvent.click(screen.getByText(/simpan/i));

  // Pastikan pesan error muncul
  expect(await screen.findByText(/judul dan penulis wajib diisi!/i)).toBeInTheDocument();
});

test('memanggil onSubmit saat form valid', async () => {
  const onSubmitMock = jest.fn();
  render(<BookForm onSubmit={onSubmitMock} />);

  // Mengisi form dengan data valid
  fireEvent.change(screen.getByPlaceholderText(/judul/i), { target: { value: 'Buku Test' } });
  fireEvent.change(screen.getByPlaceholderText(/penulis/i), { target: { value: 'Penulis Test' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'baca' } });

  fireEvent.click(screen.getByText(/simpan/i));

  // Pastikan onSubmit dipanggil dengan data yang benar
  await waitFor(() => expect(onSubmitMock).toHaveBeenCalledWith({
    title: 'Buku Test',
    author: 'Penulis Test',
    status: 'baca',
  }));
});
