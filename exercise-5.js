function ubahHuruf(kata) {

    var alphabet = 'abcdefghjklmnopqrstuvwxyz'
    var tampungKata = ''

    for (i = 0; i < kata.length; i++) {
        for(j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j]) {
                tampungKata += alphabet[j + 1]
            }
        }
    }
    return tampungKata
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu