/* Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi 
lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

// function tukarBesarKecil(kalimat) {
// var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
// var hurufBesar = hurufKecil.toUpperCase()

// }
//   // TEST CASES
//   console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
//   console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
//   console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
//   console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
//   console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"

function tukarBesarKecil(kalimat) {

    
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz '
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    var numberSymbol = '0123456789!@#$%^&*-'
    
    var store = ''
    for (i = 0; i < kalimat.length; i++) {
        for (j= 0; j < hurufKecil.length; j++) {
        if (kalimat[i] === hurufKecil[j]) {
            store += hurufBesar[j]
        }
        else if (kalimat[i] === hurufBesar[j]) {
            store += hurufKecil[j]
        }
        else if (kalimat[i] === numberSymbol[j]) {
            store += kalimat[i]
        }
        }
    }
    return store
}
    
//   // TEST CASES
  console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
  console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
  console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
  console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"