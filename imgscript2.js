// Dapatkan referensi ke elemen input file dan elemen gambar
const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");

// Tambahkan event listener untuk memantau perubahan pada input file
fileInput.addEventListener("change", function () {
  // Pastikan bahwa pengguna telah memilih sebuah file
  if (fileInput.files.length > 0) {
    // Dapatkan file gambar yang dipilih oleh pengguna
    const selectedImage = fileInput.files[0];

    // Buat objek URL untuk file gambar
    const imageUrl = URL.createObjectURL(selectedImage);

    // Atur sumber gambar elemen img untuk menampilkan gambar yang dipilih
    imagePreview.src = imageUrl;
  } else {
    // Jika pengguna tidak memilih file, kosongkan sumber gambar
    imagePreview.src = "";
  }
});
