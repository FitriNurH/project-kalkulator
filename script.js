function masukan(num) {
    document.form.layout.value = document.form.layout.value + num; //simpan nilai
}

function hasil() {
    var nilai = document.form.layout.value;
    if (nilai) document.form.layout.value = eval(nilai); // cari hasil
}

function reset() {
    document.form.layout.value = ""; // kosongkan tampilan
}

function hapus() {
    var nilai = document.form.layout.value;
    document.form.layout.value = nilai.substring(0, nilai.length - 1); // hapus satu karakter
}