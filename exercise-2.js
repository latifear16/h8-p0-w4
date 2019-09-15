// Faktor Persekutuan Terbesar
// Algoritma
// 1. Buat sebuah function yang menerima 2 parameter (ex :angka1, angka2)
// 2. Sebuah angka genap/ganjil akan selalu habis apabila dibagi salah satu angka genap/ganjil yang nilainya di bawah angka tersebut
//    ex (16 akan habis dibagi 2, 4, 8) (21 akan habis dibagi 3, 7)
// 3. Cari satu angka terbesar yang dapat membagi habis angka di parameter angka1 dan angka2, tentunya angka tersebut tidak dapat lebih besar dari yang telah diinput di parameter

// WITH NESTED LOOP
function fpb(angka, angka2) {
    for (i = 0; i < 1; i++) {
    var storefpb = []
            for (j = 0; j < angka2; j++) {
                if (angka % j === 0 && angka2 % j === 0) {
                storefpb.push(j)
                }   
            }
    }
    return storefpb[storefpb.length - 1]
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1


//WITHOUT NESTED LOOP
function fpb(angka, angka2) {
    var storefpb = []
    for (i = 0; i < angka2; i++) {
        if (angka % i === 0 && angka2 % i === 0) {
        storefpb.push(i)
        }
    }
    return storefpb [storefpb.length - 1]
}
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1


//WITHOUT ARRAY
function fpb(angka, angka2) {
    for (i = 0; i < angka2; i++) {
        if (angka % i === 0 && angka2 % i === 0) {
        storefpb = (i)
        }
    }
    return storefpb
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1