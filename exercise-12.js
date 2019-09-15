// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
// Function akan menerima array yang berisikan object pembeli (nama pembeli,
// barang yang ingin dibeli dan jumlah barang yang dibelinya). 
// Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object 
// dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
// siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut


// function countProfit(shoppers) {
//     let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                        ['Baju Zoro', 500000, 2],
//                        ['Sweater Uniklooh', 175000, 1]
//                      ];

//     var objTemp = 
//       [
//       {
//         shoppers : []
//       }
//       ]
                     
//     for ( i = 0 ; i < shoppers.length; i++) {
//       for ( j = 0; j < listBarang.length; j++) {
//       if (shoppers[i].product == listBarang[j][0]) {
//         objTemp[0].shoppers.push(shoppers[i].name)
//         objTemp.product = shoppers[0].product
//         objTemp.leftOver = listBarang[j][2] - shoppers[i].amount
//         objTemp.totalProfit = listBarang[i][1] * shoppers[i].amount
//        }
//      }
//     }
//     return objTemp
  
//     // you can only write your code here!
//   }

  function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    if (shoppers.length === 0) {
      return shoppers
    }

    var tampungData = []                 
      
    for ( i= 0; i < listBarang.length; i++) {

      var listData = 
      {
        product : listBarang[i][0],
        shoppers : [],
        leftover : listBarang[i][2],
        totalprofit : 0 
      }
      tampungData.push(listData)
    }  


  //   isi var tampungData
  //   [ { product: 'Sepatu Stacattu',
  //   shoppers: [],
  //   leftover: 10,
  //   totalprofit: 0 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftover: 2,
  //   totalprofit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftover: 1,
  //   totalprofit: 0 } ]

  for ( a = 0; a < shoppers.length; a++) {
    for ( j = 0; j < tampungData.length; j++) {

      if (shoppers[a].amount <= tampungData[j].leftover) {

        if (shoppers[a].product == tampungData[j].product) {
          tampungData[j].shoppers.push(shoppers[a].name)
          tampungData[j].leftover = tampungData[j].leftover - shoppers[a].amount
          if (listBarang[j][0] == shoppers[a].product ) {
            tampungData[j].totalprofit = tampungData[j].totalprofit + (listBarang[j][1] * shoppers[a].amount) //notes to self to increment var with previous values always use +=
            // tampungData[j].totalprofit = listBarang[j][1] * shoppers[a].amount -- all code is good, but this line causing headache @_@, profits go wrong 
          }
        }
      }
    }
  }
  return tampungData
  }
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]\