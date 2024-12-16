document.getElementById('submitButton').addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form fields
    const nama = document.getElementById('nama').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    const agama = document.getElementById('agama').value;
    const sekolahAsal = document.getElementById('sekolah_asal').value.trim();

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validate each field
    if (nama === "") {
        document.getElementById('nama-error').textContent = "Nama harus diisi.";
        isValid = false;
    }
    if (alamat === "") {
        document.getElementById('alamat-error').textContent = "Alamat harus diisi.";
        isValid = false;
    }
    if (!jenisKelamin) {
        document.getElementById('jenis-kelamin-error').textContent = "Jenis kelamin harus dipilih.";
        isValid = false;
    }
    if (agama === "") {
        document.getElementById('agama-error').textContent = "Agama harus dipilih.";
        isValid = false;
    }
    if (sekolahAsal === "") {
        document.getElementById('sekolah-asal-error').textContent = "Sekolah asal harus diisi.";
        isValid = false;
    }

    // Submit form if valid
    if (isValid) {
        document.getElementById('formDaftar').submit();
    }
});
