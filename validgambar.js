const inputGambar = document.getElementById("fileInput");
const tampilanGambar = document.getElementById("imagePreview");
const pesanError = document.getElementById("pesan-error");

inputGambar.addEventListener("change", function () {
  const file = inputGambar.files[0];

  if (file) {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const maxFileSize = 500 * 1024; // 500KB

    if (!allowedExtensions.test(file.name)) {
      pesanError.textContent =
        "Hanya berkas gambar dengan ekstensi .jpg, .jpeg, .png, atau .gif yang diperbolehkan.";
      tampilanGambar.src = "";
      inputGambar.value = ""; // Menghapus berkas yang dipilih
    } else if (file.size > maxFileSize) {
      pesanError.textContent =
        "Ukuran berkas melebihi batas 500KB. Silakan pilih berkas lain.";
      tampilanGambar.src = "noimage.jpeg";
      inputGambar.value = ""; // Menghapus berkas yang dipilih
    } else {
      pesanError.textContent = ""; // Bersihkan pesan kesalahan jika valid
      const URLGambar = URL.createObjectURL(file);
      tampilanGambar.src = URLGambar;
    }
  }
});
