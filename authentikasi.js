// buat fungsi
// ambil nilai username
// ambil nilai password
// kita cek apakah username dan password benar dengan yang kita tentukan nilainya 
// jika benar berikan alert berhasil logun dan arahkan ke file index
// jika password dan username kosong
// maka berikan alert password dan username kosong 
// jika password dan username salah 
// tampilkan username dan pssword salah

function login() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "rezaalfiyana" && password =="123456") {
    alert('Anda Berhasil Login');
    window.location="index.html"
    return false
   }
   else{
      alert("Username/password yang anda inputkan salah")
   }
}