
#  Sistem Manajemen Perpustakaan Sederhana

Sistem ini merupakan aplikasi terminal sederhana untuk mengelola item perpustakaan (buku dan majalah) menggunakan konsep Object-Oriented Programming (OOP) di Python. Fitur-fitur seperti **penambahan**, **pencarian**, **penghapusan**, dan **pengeditan** item telah diimplementasikan.

##  Fitur

- Menambahkan item baru (Buku / Majalah)
- Menampilkan semua item
- Mencari item berdasarkan **judul**
- Mencari item berdasarkan **ID**
- Mengedit data item
- Menghapus item dari perpustakaan

##  Konsep OOP yang Digunakan

- **Class & Inheritance**: `Book` dan `Magazine` mewarisi dari abstract class `LibraryItem`
- **Encapsulation**: Atribut `__id` dan `__title` bersifat private
- **Polymorphism**: Method `display_info()` di-override oleh setiap subclass
- **Property**: Digunakan untuk mengakses judul dengan `@property`

##  Cara Menjalankan Program

1. Pastikan Python 3.x telah terinstal.
2. Buka terminal atau command prompt.
3. Arahkan ke folder tempat file `perpustakaan.py` berada.
4. Jalankan perintah berikut:
   ```bash
   python perpustakaan.py
