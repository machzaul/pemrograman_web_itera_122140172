# 📚 Proyek Python Sederhana

Proyek ini berisi 3 program Python:

1. **Penghitung BMI (Body Mass Index)**
2. **Pengelolaan Data Nilai Mahasiswa**
3. **Modul Matematika dan Konversi Suhu**

Semua program dibuat untuk melatih dasar-dasar pemrograman Python seperti perhitungan, percabangan, list-dictionary, modularisasi, dan penggunaan fungsi.

---

## 🢁‍♂️ 1. Penghitung BMI (Body Mass Index)

### Deskripsi
Program ini menghitung BMI berdasarkan input berat badan dan tinggi badan, kemudian mengkategorikan hasilnya.

### Rumus
```python
BMI = berat / (tinggi * tinggi)
```

### Kategori BMI
| Rentang BMI     | Kategori             |
| --------------- | -------------------- |
| BMI < 18.5      | Berat badan kurang    |
| 18.5 <= BMI < 25| Berat badan normal    |
| 25 <= BMI < 30  | Berat badan berlebih  |
| BMI >= 30       | Obesitas              |

### Cara Menjalankan
```bash
python PenghitungBMI.py
```

### Contoh Output
```
Masukkan berat badan Anda (kg): 59
Masukkan tinggi badan Anda (m): 1.78

BMI Anda adalah: 18.62
Kategori: Berat badan normal
```

---

## 🎓 2. Pengelolaan Data Nilai Mahasiswa

### Deskripsi
Program ini mengelola daftar nilai mahasiswa, menghitung nilai akhir, memberikan grade, serta menampilkan mahasiswa dengan nilai tertinggi dan terendah.

### Rumus Nilai Akhir
```python
nilai_akhir = (0.3 * nilai_uts) + (0.4 * nilai_uas) + (0.3 * nilai_tugas)
```

### Grade Berdasarkan Nilai Akhir
| Nilai Akhir | Grade |
| ----------- | ----- |
| 80 - 100    | A     |
| 70 - 79     | B     |
| 60 - 69     | C     |
| 50 - 59     | D     |
| < 50        | E     |

### Cara Menjalankan
```bash
python data_mahasiswa.py
```

### Contoh Output
```
+----------------------+----------+------------+-----------+-------------+-------------+-------+
| Nama                 | NIM      | Nilai UTS  | Nilai UAS | Nilai Tugas | Nilai Akhir | Grade |
+----------------------+----------+------------+-----------+-------------+-------------+-------+
| Ahmad Fauzi          | 220001   | 78         | 85        | 80          | 81.1        | A     |
| Budi Setiawan        | 220002   | 60         | 70        | 65          | 65.5        | C     |
| Citra Lestari        | 220003   | 90         | 92        | 88          | 90.0        | A     |
| Dimas Pratama        | 220004   | 55         | 58        | 52          | 54.7        | D     |
| Eva Nuraini          | 220005   | 45         | 48        | 50          | 48.9        | E     |
+----------------------+----------+------------+-----------+-------------+-------------+-------+

Mahasiswa dengan nilai tertinggi:
Nama: Citra Lestari, Nilai Akhir: 90.0

Mahasiswa dengan nilai terendah:
Nama: Eva Nuraini, Nilai Akhir: 48.9
```

---

## 📊 3. Modul Matematika dan Konversi Suhu

### Deskripsi
Modul ini berisi berbagai fungsi matematika untuk menghitung luas, keliling, dan mengkonversi suhu. Program utama (`main.py`) menggunakan fungsi dari modul `math_operations.py`.

### Fungsi Geometri
- **Persegi**
  - Luas = sisi × sisi
  - Keliling = 4 × sisi
- **Persegi Panjang**
  - Luas = panjang × lebar
  - Keliling = 2 × (panjang + lebar)
- **Lingkaran**
  - Luas = π × r²
  - Keliling = 2 × π × r

### Fungsi Konversi Suhu
- Celsius → Fahrenheit
  - `(Celsius × 9/5) + 32`
- Celsius → Kelvin
  - `Celsius + 273.15`

### Konstanta
```python
PI = 3.14159
```

### Struktur Folder
```
project-folder/
├── math_operations.py
├── main.py
└── README.md
```

### Cara Menjalankan
```bash
python main.py
```

### Contoh Output
```
Luas Persegi: 25
Keliling Persegi: 20

Luas Persegi Panjang: 50
Keliling Persegi Panjang: 30

Luas Lingkaran: 78.53975
Keliling Lingkaran: 31.4159

25°C dalam Fahrenheit: 77.0
25°C dalam Kelvin: 298.15

Nilai konstanta PI: 3.14159
```

---

# 📷 Screenshots

> **Note:** Berikut beberapa hasil screenshot program

| Program                         | Nama File Screenshot         |
| -------------------------------- | ----------------------------- |
| Penghitung BMI                  | `bmiss.png`         |
| Pengelolaan Data Mahasiswa       | `datass.png`   |
| Perhitungan Geometri             | `ssmain.png`    |
| Konversi Suhu                   | `ssmain.png`        |
| Menampilkan Konstanta PI         | `ssmain.png`          |



---

# 📌 Catatan Tambahan
- Gunakan minimal 2 cara berbeda saat mengimpor modul:
  - `import math_operations`
  - `from math_operations import fungsi`
- Pastikan Python telah terinstall di komputer sebelum menjalankan.
- Simpan semua file `.py` dan folder `screenshots` dalam 1 folder project.

---

# 🙋‍♂️ Author
- Nama: *(Machzaul Harmansyah)*
- Deskripsi: Proyek latihan Python sederhana untuk memperkuat dasar logika, percabangan, fungsi, modularisasi, dan file handling.

---

# 🌟 Selesai!

