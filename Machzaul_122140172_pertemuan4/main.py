# main.py

import math_operations
from math_operations import celsius_to_kelvin, luas_persegi_panjang

def garis():
    print("=" * 50)

print("=== Program Perhitungan Geometri dan Konversi Suhu ===")
garis()

# Input untuk bentuk geometri
sisi = float(input("Masukkan panjang sisi persegi (cm): "))
panjang = float(input("Masukkan panjang persegi panjang (cm): "))
lebar = float(input("Masukkan lebar persegi panjang (cm): "))
jari_jari = float(input("Masukkan jari-jari lingkaran (cm): "))

garis()

# Menampilkan hasil perhitungan geometri
print("=== Hasil Perhitungan Geometri ===")
print(f"Luas Persegi: {math_operations.luas_persegi(sisi)} cm²")
print(f"Keliling Persegi: {math_operations.keliling_persegi(sisi)} cm")

print(f"Luas Persegi Panjang: {luas_persegi_panjang(panjang, lebar)} cm²")
print(f"Keliling Persegi Panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)} cm")

print(f"Luas Lingkaran: {math_operations.luas_lingkaran(jari_jari):.2f} cm²")
print(f"Keliling Lingkaran: {math_operations.keliling_lingkaran(jari_jari):.2f} cm")

garis()

# Input untuk suhu
celsius = float(input("Masukkan suhu dalam Celsius (°C): "))

garis()

# Menampilkan hasil konversi suhu
print("=== Hasil Konversi Suhu ===")
print(f"{celsius}°C ke Fahrenheit: {math_operations.celsius_to_fahrenheit(celsius):.2f}°F")
print(f"{celsius}°C ke Kelvin: {celsius_to_kelvin(celsius):.2f}K")

garis()

# Menampilkan konstanta
print(f"Nilai konstanta PI: {math_operations.PI}")
