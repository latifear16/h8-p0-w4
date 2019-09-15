// CARA 1 PAKE ARRAY DAN LANGSUNG UBAH ARRAYNYA DI LOOP
function urutkanAbjad(str) {
    // you can only write your code here!
    var kalimat = str.split('')
    var tukarHuruf

    for (i = 0; i < kalimat.length; i++) {
        for (j = 0; j < kalimat.length; j++) {
            if (kalimat[j] > kalimat[j + 1]) {
            tukarHuruf = kalimat[j]
            kalimat[j] = kalimat[j + 1]
            kalimat[j + 1] = tukarHuruf
            }
        }
    }
    return kalimat.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'


// CARA 2 PAKE KAMUS (EZ METHOD)
function urutkanAbjad(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var tampung = ''
    
    for (i = 0; i < alphabet.length; i ++) {
        for (j = 0; j < str.length; j++) {
            if (alphabet [i] === str [j]) {
                tampung += alphabet[i]
            }
        }

    }
    return tampung
}



//   // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
