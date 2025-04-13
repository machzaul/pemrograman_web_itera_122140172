# 🎓 Personal Dashboard Mahasiswa

Aplikasi dashboard sederhana berbasis web yang membantu mahasiswa untuk mengatur **daftar tugas**, **catatan penting**, dan **melihat waktu secara real-time**. Data disimpan secara **lokal** menggunakan `localStorage`, jadi pengguna tidak perlu koneksi internet untuk menyimpan data.

## ✨ Fitur Aplikasi

- ⏰ **Jam Real-time** — Menampilkan jam sekarang yang selalu update.
- ✅ **Daftar Tugas** — Tambah, edit, dan hapus daftar tugas harianmu.
- 📝 **Catatan** — Tambahkan catatan penting, semua tersimpan secara lokal.
- 💾 **Penyimpanan Otomatis** — Data disimpan otomatis menggunakan `localStorage`, tidak hilang saat browser ditutup.

## 📸 Screenshot


[Screenshot Dashboard](praktikum 2.png)

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Storage API (`localStorage`)

---

## ✅ Fitur ES6+ yang Diimplementasikan

| Fitur                 | Implementasi                                                                 |
|----------------------|------------------------------------------------------------------------------|
| `let` & `const`       | Untuk semua deklarasi variabel agar lebih aman dan jelas scope-nya          |
| Arrow Functions       | `startClock`, `addTask`, `removeTask`, `renderList`, `renderNotes`          |
| Template Literals     | Digunakan saat merender HTML di `renderList()`                              |
| Async/Await           | Fungsi `saveNote()` menggunakan `await` untuk simulasi proses async         |
| Classes               | Seluruh logika aplikasi dibungkus dalam class `Dashboard`                   |

---

## 🧠 Cara Menggunakan

1. Buka `index.html` di browser kamu setelah melakukan cloning.
2. Tambahkan tugas dan catatan sesuai kebutuhan.
3. Data akan otomatis tersimpan di browser kamu (melalui `localStorage`).
4. Tutup dan buka kembali browser, data tetap ada!

---

## 💡 Potensi Pengembangan Lanjutan

- Menambahkan fitur jadwal kuliah mingguan.
- Tambahan kategori pada tugas.
- Dark mode.
- Integrasi API Cuaca dan Kalender Google.

---