// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai truejika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.


function checkAB(num) {
  var charA = 0
  var charB = 0

  var alphabet = 'ab'

  for (i = 0; i <= num.length; i++) {
    if (num [i] === 'a') {
      charA = i
    }
    else if (num [i] === 'b') {
      charB = i
    }
  }

  if (Math.abs(charA - charB) >= 3) {
    return true
  }
  else if (charA === 0 && charB === 0) {
    return false
  }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false // case terakhir masih belum jalan