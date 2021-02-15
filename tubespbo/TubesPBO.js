// mendefinisikan data array kosong untuk data siswa
var sisArray = [];
var app = (function() {

  //add data Siswa sebagai object
  function addDataSiswa() {
    //add data Siswa
    console.log("\n<====== Formulir Registrasi ======>");
    console.log("\n<======      Data Siswa      =====>");
    nama = prompt("Nama Lengkap  : ")
    tempatTanggalLahir = prompt("Tempat Tanggal lahir : ")
    alamat = prompt("Alamat Saat ini : ")
    asalSekolah = prompt("Asal Sekolah")
    jenisKelamin = prompt("Jenis Kelamin : ")
    jurusan = prompt("Jurusan yang akan dipilih : ")
    nisn = prompt("NISN : ")
    agama = prompt("Agama : ")
    //add data Ayah
    console.log("\n\n<====== Data Orang Tua/Wali Murid ======>");
    console.log("\n<====== Ayah ======>");
    nama2 = prompt("Nama Lengkap  : ")
    tempatTanggalLahir2 = prompt("Tempat Tanggal lahir : ")
    agama2 = prompt("Agama : ")
    pekerjaan = prompt("Pekerjaan :")
    notelp = prompt("NO Telpon :")
    rwytPendidikan = prompt("Riwayat Pendidikan Terakhir :")
    //add data Ibu
    console.log("\n<====== IBU ======>");
    nama3 = prompt("Nama Lengkap  : ")
    tempatTanggalLahir3 = prompt("Tempat Tanggal lahir : ")
    agama3 = prompt("Agama : ")
    pekerjaan2 = prompt("Pekerjaan :")
    notelp = prompt("NO Telpon :")
    rwytPendidikan2 = prompt("Riwayat Pendidikan Terakhir :")

    return {
      nama: nama,
      nama2: nama2,
      nama3: nama3,
      nisn: nisn,
      notelp: notelp,
      notelp2: notelp,
      alamat: alamat,
      agama: agama,
      agama2: agama2,
      agama3: agama3,
      jurusan: jurusan,
      pekerjaan: pekerjaan,
      pekerjaan2: pekerjaan2,
      jenisKelamin: jenisKelamin,
      asalSekolah: asalSekolah,
      rwytPendidikan: rwytPendidikan,
      rwytPendidikan2: rwytPendidikan2,
      tempatTanggalLahir: tempatTanggalLahir,
      tempatTanggalLahir2: tempatTanggalLahir2,
      tempatTanggalLahir3: tempatTanggalLahir3,

    }
  }
  //function ask
  function ask(inputName) {
    return prompt(inputName);
  }

  //function grade dan nilai
  function getGrade(nilai) {
    if (nilai >= 75 && nilai <= 100) {
      return 'Selamat Anda Diterima di SMKN 1 RPL'
    } else if (nilai >= 0 && nilai < 75) {
      return 'Maaf,Nilai Anda Tidak Mencukupi, Silahkan Mencoba Lagi Di Lain Waktu'
    }
  }

  //function print all menu
  function printMenu() {
    console.log("\n<====== PENDAFATARAN SISWA BARU ======>");
    console.log("<======        SMKN 1 RPL       ======>");
    console.log("\n<====== Menu ======>");
    console.log("1. Registrasi");
    console.log("2. Input Nilai");
    console.log("3. Lihat Profil");
    console.log("4. Informasi Kelulusan");
    console.log("5. keluar");
  }

  return {
    addDataSiswa: addDataSiswa,
    ask: ask,
    getGrade: getGrade,
    printMenu: printMenu,
  }

}())

//Program Utama
var loop = 1;

while (loop > 0) {
  //menampilkan semua menu yang tersedia
  app.printMenu()
  //menanyakan menu yang ingin dipilih
  var menuYangDipilih = app.ask("Masukan menu : ")

  switch (menuYangDipilih) {
    case '1':
      //menampilkan hasil pertanyaan dari function add data siswa
      sisArray.push(app.addDataSiswa())
      break;

    case '2':
      for (let m = 0; m < sisArray.length; m++) {
        console.log("\n# No Registrasi Siswa : " + (m + 1));
        console.log("\n<====== Data Siswa ======>");
        console.log("Nama : " + sisArray[m].nama);
        console.log("Tanggal lahir : " + sisArray[m].tempatTanggalLahir);
        console.log("NISN : " + sisArray[m].nisn);
        console.log("Jurusan Yang dipilih : " + sisArray[m].jurusan);
        //nilai yang belum terisi
        console.log("Nilai : " + sisArray[m].grade);
      }

      console.log("\n");
      console.log("\n<====== Memasukkan Nilai Siswa======>");
     var dataYangInginDiEdit = app.ask("Masukan nomor urut pendaftaran Siswa : ")
      var index = dataYangInginDiEdit - 1;
      //ask nilai
      var tanyaNilai = app.ask("Masukkan nilai rata-rata lapor semester anda (1-5) : ")
    //mengubah data nilai berdasarkan index
      sisArray[index].grade = app.getGrade(tanyaNilai)

      console.log("Nilai Berhasil di Inputkan ");
      break;

    case '3':
      for (let m = 0; m < sisArray.length; m++) {
        console.log("\n# No Registrasi Siswa : " + (m + 1));
        console.log("Nama : " + sisArray[m].nama);
        console.log("Tempat Tanggal Lahir : " + sisArray[m].tempatTanggalLahir);
        console.log("Alamat : " + sisArray[m].alamat);
        console.log("Agama : " + sisArray[m].agama);
        console.log("NISN : " + sisArray[m].nisn);
        console.log("jenis Kelamin : " + sisArray[m].jenisKelamin);
        console.log("Asal Sekolah : " + sisArray[m].asalSekolah);
        console.log("Jurusan Yang dipilih : " + sisArray[m].jurusan);
        console.log("Rata - rata nilai Semester : " + tanyaNilai);

        console.log("\nNama Ayah : " + sisArray[m].nama2);
        console.log("Tempat Tamggal Lahir : " + sisArray[m].tempatTanggalLahir2);
        console.log("Agama : " + sisArray[m].agama2);
        console.log("Pekerjaan : " + sisArray[m].pekerjaan);
        console.log("NO Telpon : " + sisArray[m].notelp);
        console.log("Riwayat Pendidikan terakhir : " + sisArray[m].rwytPendidikan);

        console.log("\nNama Ibu : " + sisArray[m].nama3);
        console.log("Tempat Tamggal Lahir : " + sisArray[m].tempatTanggalLahir3);
        console.log("Agama : " + sisArray[m].agama3);
        console.log("Pekerjaan : " + sisArray[m].pekerjaan2);
        console.log("NO Telpon : " + sisArray[m].notelp2);
        console.log("Riwayat Pendidikan terakhir : " + sisArray[m].rwytPendidikan2);
      }
      break;

    case '4':
      for (let m = 0; m < sisArray.length; m++) {
        console.log("\n# No Urut Siswa : " + (m + 1));
        console.log("Nama : " + sisArray[m].nama);
        console.log("jenis Kelamin : " + sisArray[m].jenisKelamin);
        console.log("Tempat Tanggal lahir : " + sisArray[m].tempatTanggalLahir);
        console.log("Asal Sekolah : " + sisArray[m].asalSekolah);
        console.log("Jurusan Yang dipilih : " + sisArray[m].jurusan);
        console.log("Hasil Seleksi : " + sisArray[m].grade);
      }
      break;

    case '5':
      console.log("Terima kasih telah menggunakan layanan kami :)");
      loop = 0
      break;

    default:
      console.log("Error : Menu " + menuYangDipilih + " tidak tersedia!");
  }
}