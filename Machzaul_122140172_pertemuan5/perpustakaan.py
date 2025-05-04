## machzaul harmansyah
## 122140172

from abc import ABC, abstractmethod

# Abstract class sebagai cetakan dasar untuk semua item di perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id  # Atribut ID item (protected)
        self._title = title      # Atribut judul item (protected)

    @abstractmethod
    def display(self):
        # Method abstrak untuk menampilkan info item (harus diimplementasi oleh subclass)
        pass

    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id

    def edit(self, new_title):
        # Mengedit judul item
        self._title = new_title

# Class Book sebagai turunan dari LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # Atribut penulis buku (private)

    def display(self):
        # Menampilkan informasi buku
        print(f"[Book] ID: {self._item_id}, Title: '{self._title}', Author: {self.__author}")

    def edit(self, new_title, new_author=None):
        # Mengedit judul dan (jika diberikan) penulis buku
        super().edit(new_title)
        if new_author:
            self.__author = new_author

# Class Magazine sebagai turunan dari LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # Atribut nomor edisi (private)

    def display(self):
        # Menampilkan informasi majalah
        print(f"[Magazine] ID: {self._item_id}, Title: '{self._title}', Issue No: {self.__issue_number}")

    def edit(self, new_title, new_issue_number=None):
        # Mengedit judul dan (jika diberikan) nomor edisi majalah
        super().edit(new_title)
        if new_issue_number is not None:
            self.__issue_number = new_issue_number

# Class Library untuk mengelola kumpulan item di perpustakaan
class Library:
    def __init__(self):
        self.__items = []  # Menyimpan semua item (buku/majalah)

    def add_item(self, item):
        # Menambahkan item baru ke daftar perpustakaan
        self.__items.append(item)
        print(f"Item '{item.title}' berhasil ditambahkan.\n")

    def display_all_items(self):
        # Menampilkan semua item
        if not self.__items:
            print("Tidak ada item di perpustakaan.\n")
            return
        for item in self.__items:
            item.display()
        print()

    def search_by_title(self, keyword):
        # Mencari item berdasarkan kata kunci judul
        found = [item for item in self.__items if keyword.lower() in item.title.lower()]
        if not found:
            print("Tidak ada item dengan judul tersebut.\n")
        else:
            for item in found:
                item.display()
            print()

    def search_by_id(self, item_id):
        # Mencari item berdasarkan ID
        for item in self.__items:
            if item.item_id == item_id:
                item.display()
                print()
                return item
        print("Item dengan ID tersebut tidak ditemukan.\n")
        return None

    def delete_item(self, item_id):
        # Menghapus item dari daftar
        for item in self.__items:
            if item.item_id == item_id:
                self.__items.remove(item)
                print(f"Item dengan ID '{item_id}' berhasil dihapus.\n")
                return
        print("Item tidak ditemukan.\n")

    def edit_item(self, item_id):
        # Mengedit item yang ditemukan berdasarkan ID
        item = self.search_by_id(item_id)
        if item:
            new_title = input("Masukkan judul baru: ")
            if isinstance(item, Book):
                new_author = input("Masukkan penulis baru: ")
                item.edit(new_title, new_author)
            elif isinstance(item, Magazine):
                try:
                    new_issue = int(input("Masukkan nomor edisi baru: "))
                    item.edit(new_title, new_issue)
                except ValueError:
                    print("Nomor edisi harus angka.\n")
            print("Item berhasil diperbarui.\n")

# Fungsi utama program
def main():
    library = Library()

    # Data awal: beberapa item ditambahkan otomatis
    library.add_item(Book("B001", "Pemrograman Python", "Andi"))
    library.add_item(Book("B002", "Algoritma Dasar", "Budi"))
    library.add_item(Book("B003", "Struktur Data", "Citra"))
    library.add_item(Magazine("M001", "Majalah IT", 12))
    library.add_item(Magazine("M002", "Teknologi Masa Depan", 8))

    # Menu interaktif untuk pengguna
    while True:
        print("=== Sistem Manajemen Perpustakaan ===")
        print("1. Tambah Item")
        print("2. Tampilkan Semua Item")
        print("3. Cari Item berdasarkan Judul")
        print("4. Cari Item berdasarkan ID")
        print("5. Edit Item")
        print("6. Hapus Item")
        print("7. Keluar")
        choice = input("Pilih menu (1-7): ")

        if choice == "1":
            # Tambah item baru dari input pengguna
            tipe = input("Masukkan tipe item (book/magazine): ").lower()
            item_id = input("ID: ")
            title = input("Judul: ")
            if tipe == "book":
                author = input("Penulis: ")
                library.add_item(Book(item_id, title, author))
            elif tipe == "magazine":
                try:
                    issue = int(input("Nomor Edisi: "))
                    library.add_item(Magazine(item_id, title, issue))
                except ValueError:
                    print("Nomor edisi harus berupa angka.\n")
            else:
                print("Tipe item tidak dikenali.\n")

        elif choice == "2":
            # Tampilkan semua item
            library.display_all_items()

        elif choice == "3":
            # Cari berdasarkan judul
            keyword = input("Masukkan judul yang dicari: ")
            library.search_by_title(keyword)

        elif choice == "4":
            # Cari berdasarkan ID
            item_id = input("Masukkan ID item: ")
            library.search_by_id(item_id)

        elif choice == "5":
            # Edit item
            item_id = input("Masukkan ID item yang ingin diedit: ")
            library.edit_item(item_id)

        elif choice == "6":
            # Hapus item
            item_id = input("Masukkan ID item yang ingin dihapus: ")
            library.delete_item(item_id)

        elif choice == "7":
            # Keluar dari program
            print("Terima kasih telah menggunakan sistem ini!")
            break

        else:
            print("Pilihan tidak valid.\n")

# Menjalankan program jika file dieksekusi langsung
if __name__ == "__main__":
    main()
