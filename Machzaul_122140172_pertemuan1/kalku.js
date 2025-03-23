// Fungsi Sapa
function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler tombol Sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value.trim();
    const output = document.getElementById("sapa-output");

    if (nama === "") {
        output.innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        output.innerHTML = `<p class="text-green-500">${sapaNama(nama)}</p>`;
    }
});

// Fungsi Kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    if (isNaN(angka1)) return "Masukkan angka yang valid!";
    
    switch (operasi) {
        case "tambah": return angka1 + angka2;
        case "kurang": return angka1 - angka2;
        case "kali": return angka1 * angka2;
        case "bagi": return angka2 !== 0 ? angka1 / angka2 : "Error: Pembagian dengan nol tidak diperbolehkan";
        case "pangkat": return Math.pow(angka1, angka2);
        case "akar": return angka1 >= 0 ? Math.sqrt(angka1) : "Error: Akar negatif tidak diperbolehkan";
        case "modulus": return angka2 !== 0 ? angka1 % angka2 : "Error: Modulus dengan nol tidak diperbolehkan";
        default: return "Operasi tidak valid";
    }
}

// Event listener untuk semua tombol kalkulator
document.querySelectorAll(".btn-kalkulator").forEach(button => {
    button.addEventListener("click", function() {
        const angka1 = parseFloat(document.getElementById("angka1").value);
        const angka2 = parseFloat(document.getElementById("angka2").value);
        const operasi = this.dataset.operasi;
        const output = document.getElementById("hasil-kalkulator");

        let hasil;
        if (operasi === "akar") {
            hasil = hitungKalkulator(angka1, null, operasi);
            output.innerHTML = `<p>Hasil: √${angka1} = ${hasil}</p>`;
        } else {
            hasil = hitungKalkulator(angka1, angka2, operasi);
            output.innerHTML = `<p>Hasil: ${angka1} ${this.textContent} ${angka2} = ${hasil}</p>`;
        }

        // Kosongkan input setelah hitung
        document.getElementById("angka1").value = "";
        document.getElementById("angka2").value = "";
    });
});
