# Program Pengelolaan Data Nilai Mahasiswa

# List berisi data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "23001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 75},
    {"nama": "Budi", "nim": "23002", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 60},
    {"nama": "Citra", "nim": "23003", "nilai_uts": 90, "nilai_uas": 95, "nilai_tugas": 85},
    {"nama": "Dina", "nim": "23004", "nilai_uts": 60, "nilai_uas": 55, "nilai_tugas": 65},
    {"nama": "Eka", "nim": "23005", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50},
]

# Menghitung nilai akhir dan menentukan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Menampilkan data dalam format tabel
print("\nData Nilai Mahasiswa")
print("=" * 80)
print(f"{'Nama':<15} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("-" * 80)

for mhs in mahasiswa:
    print(f"{mhs['nama']:<15} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<5}")

print("=" * 80)

# Menentukan mahasiswa dengan nilai tertinggi dan terendah
mahasiswa_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
mahasiswa_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\nMahasiswa dengan nilai tertinggi: {mahasiswa_tertinggi['nama']} ({mahasiswa_tertinggi['nilai_akhir']:.2f})")
print(f"Mahasiswa dengan nilai terendah : {mahasiswa_terendah['nama']} ({mahasiswa_terendah['nilai_akhir']:.2f})")
