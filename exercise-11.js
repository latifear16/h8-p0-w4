function shoppingTime(memberId, money) {
    // you can only write your code here!
    var items = 
    [
        {
            name : 'Sepatu Stacattu',
            price : 1500000
        },
        
        {
            name : 'Baju Zoro',
            price : 500000
        },

        {
            name : 'Baju H&N',
            price : 250000
        },

        {
            name : 'Sweater Uniklooh',
            price : 175000
        },

        {
            name : 'Casing Handphone',
            price : 50000
        }
    ]

    var objShopping = {
        memberId : memberId,
        money : money,
        listPurchased : [],
    }
        var sisaDuit = money //buat nyimpen sisa duit setiap habis belanja item

    for ( i = 0; i < items.length; i++) { //notes for self, only need 1 loop for this case
        if (memberId == false || memberId == undefined) {
            return 'Mohon maaf, toko X hanya berlaku untuk member saja'
        }
        else if (money < 50000) {
            return 'Mohon maaf, uang tidak cukup'
        }
        else { //notes for self, use nested if-else when necessary
            if (sisaDuit >= items[i].price) {
                objShopping.listPurchased.push(items[i].name)
                sisaDuit = sisaDuit - items[i].price
                objShopping.changeMoney = sisaDuit
            }
        }
    }
    return objShopping
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja