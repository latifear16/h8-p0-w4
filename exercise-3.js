// function cariMedian (arr) {
// Algoritma
// 1. Tentukan apakah satu set deret angka yang diinput adalah deret ganjil atau genap
// 2. Jika genap, 
//     a. maka buat dua variabel untuk menampung nilai tengah terbesar dan nilai tengah terkecil
//     b.Karena length adalah index + 1, maka kurangi length dari set deret angka dengan 1 lalu dibagi 2 dan karena
//     nilai ganjil akan desimal, bulatkan ke nilai terendah dari angka desimal tersebut, lalu simpan nilainya sebagai variabel low highMiddle
//     c.Ulangi step  namun kali ini bulatkan ke nilai terbesar dari desimal dan simpan sebagai variabel highMiddle
//     d.Melalui step a-c kita berhasil mendapatkan indeks dari nilai tengah di deret genap, karena nilai tengah pada
//     deret genap adalah rata-rata dari dua nilai tengah, maka
//     e.Akses nilai tengah dari deret genap dengan kedua indeks yang telah didapatkan sebelumnya dan jumlahkan angka
//     yang terdapat pada kedua indeks lalu dibagi 2
//     f. tampilkan hasil
// 3. Apabila ganjil
//     a. Karena length adalah index + 1, maka kurangi length dengan 1 agar mendapatkan indeks terakhir
//     b. Lakukan pembagian nilai indeks terakhir dengan 2, agar mendapatkan indeks nilai tengah
//     c. Tampilkan hasil

function cariMedian(arr) {
if (arr.length % 2 === 0) {
    var lowMiddle = Math.floor((arr.length - 1) / 2)
    var highMiddle = Math.ceil((arr.length - 1) / 2)
    var median = (arr[lowMiddle] + arr[highMiddle]) / 2
    return median 
}
else {
    var oddMiddle = (arr.length - 1) / 2
    return arr[oddMiddle]
}
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5