// Problem
// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
// Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

// Code
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tampung = []
  
  for (i = 1; i <= angka; i++) {
    var faktor = ''
      for (j = 1; j <= angka; j++) {
          if (i * j == angka) {
          faktor = faktor + i + j
          tampung.push(faktor) 
        }
      }
  }
  
  //
  var pembanding = tampung[0]
  for (x = 1; x < tampung.length; x++) {
    if (pembanding.length > tampung[x].length) {
        pembanding = tampung[x]

    }
}
return pembanding.length
}

//cek length


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2