// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code 
  
      var trip = []
      
    for (i = 0; i < arrPenumpang.length; i++) {
        var bayar = 0
        var dataTrip = 
        {
            penumpang : arrPenumpang[i][0],
            naikDari :  arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],          
        }
        for (j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][2] === rute[j]) {
                bayar = bayar + j
            }
            if (arrPenumpang[i][1] === rute[j]) {
                bayar = bayar - j
            }
        }
        dataTrip.bayar = Math.abs(bayar * 2000)
        trip.push(dataTrip)
    }
    return trip
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]
//TAMBAHAN TEST CASE
console.log(naikAngkot([['Kunkka', 'F', 'B']]))
