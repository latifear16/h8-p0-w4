// CASE
// // function angkaPrima(angka) {
// //     // you can only write your code here!
// //   }
  
// //   // TEST CASES
// //   console.log(angkaPrima(3)); // true
// //   console.log(angkaPrima(7)); // true
// //   console.log(angkaPrima(6)); // false
// //   console.log(angkaPrima(23)); // true
// //   console.log(angkaPrima(33)); // false


// PSEUDOCODE
// START
// START FUNCTION 'angkaPrima' with 'angka' as parameter
//  START FOR 
//  FOR i = 0, i LESS THAN 'angka', INCREMENT i
//      START IF
//      IF 'angka' MOD 'i' EQUALS TO 0
//      RETURN FALSE
//      END IF     
//  END FOR
////  IF IN IF STATEMENTS INSIDE FOR LOOP NO CONDITIONS ARE TRUE
//  RETURN TRUE 
//      
// END FUNCTION
// END

// DISPLAY FUNCTION 'angkaPrima' with 'angka' parameter set as 3
// DISPLAY FUNCTION 'angkaPrima' with 'angka' parameter set as 7
// DISPLAY FUNCTION 'angkaPrima' with 'angka' parameter set as 6
// DISPLAY FUNCTION 'angkaPrima' with 'angka' parameter set as 23
// DISPLAY FUNCTION 'angkaPrima' with 'angka' parameter set as 33

function angkaPrima(angka) {
    for (i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false
        }
    }
    return true
}


// TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

