## machzaul harmansyah
## 122140172

from abc import ABC, abstractmethod

# Abstract class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id  # Protected
        self._title = title

    @abstractmethod
    def display(self):
        pass

    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id

    def edit(self, new_title):
        self._title = new_title

# Subclass: Book
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # Private

    def display(self):
        print(f"[Book] ID: {self._item_id}, Title: '{self._title}', Author: {self.__author}")

    def edit(self, new_title, new_author=None):
        super().edit(new_title)
        if new_author:
            self.__author = new_author

# Subclass: Magazine
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # Private

    def display(self):
        print(f"[Magazine] ID: {self._item_id}, Title: '{self._title}', Issue No: {self.__issue_number}")

    def edit(self, new_title, new_issue_number=None):
        super().edit(new_title)
        if new_issue_number is not None:
            self.__issue_number = new_issue_number

# Class Library
class Library:
    def __init__(self):
        self.__items = []  # Private list

    def add_item(self, item):
        self.__items.append(item)
        print(f"Item '{item.title}' berhasil ditambahkan.\n")

    def display_all_items(self):
        if not self.__items:
            print("Tidak ada item di perpustakaan.\n")
            return
        for item in self.__items:
            item.display()
        print()

    def search_by_title(self, keyword):
        found = [item for item in self.__items if keyword.lower() in item.title.lower()]
        if not found:
            print("Tidak ada item dengan judul tersebut.\n")
        else:
            for item in found:
                item.display()
            print()

    def search_by_id(self, item_id):
        for item in self.__items:
            if item.item_id == item_id:
                item.display()
                print()
                return item
        print("Item dengan ID tersebut tidak ditemukan.\n")
        return None

    def delete_item(self, item_id):
        for item in self.__items:
            if item.item_id == item_id:
                self.__items.remove(item)
                print(f"Item dengan ID '{item_id}' berhasil dihapus.\n")
                return
        print("Item tidak ditemukan.\n")

    def edit_item(self, item_id):
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

# Menu interaktif
# ... (semua class sama seperti sebelumnya: LibraryItem, Book, Magazine, Library)

def main():
    library = Library()

    # Menambahkan beberapa item buku dan majalah secara otomatis
    library.add_item(Book("B001", "Pemrograman Python", "Andi"))
    library.add_item(Book("B002", "Algoritma Dasar", "Budi"))
    library.add_item(Book("B003", "Struktur Data", "Citra"))
    library.add_item(Magazine("M001", "Majalah IT", 12))
    library.add_item(Magazine("M002", "Teknologi Masa Depan", 8))

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
            library.display_all_items()

        elif choice == "3":
            keyword = input("Masukkan judul yang dicari: ")
            library.search_by_title(keyword)

        elif choice == "4":
            item_id = input("Masukkan ID item: ")
            library.search_by_id(item_id)

        elif choice == "5":
            item_id = input("Masukkan ID item yang ingin diedit: ")
            library.edit_item(item_id)

        elif choice == "6":
            item_id = input("Masukkan ID item yang ingin dihapus: ")
            library.delete_item(item_id)

        elif choice == "7":
            print("Terima kasih telah menggunakan sistem ini!")
            break

        else:
            print("Pilihan tidak valid.\n")

if __name__ == "__main__":
    main()
