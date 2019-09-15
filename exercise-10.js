function changeMe(arr) {
    
    var objAvenger = {}
    var year = new Date()
    var currentYear = year.getFullYear()

    for (i = 0; i < arr.length; i++) {
        j = 0;
            objAvenger.firstName = arr[i][j]
            objAvenger.lastname = arr[i][j + 1]
            objAvenger.gender = arr[i][j + 2]
            objAvenger.age = currentYear - arr[i][j + 3]

            
            if (!objAvenger.age || arr[i][j+3] > currentYear) {
                objAvenger.age = "Invalid Birth Year"
            }
        console.log((i + 1) + '. ' + objAvenger.firstName + ' ' + objAvenger.lastname + ':')
        console.log(objAvenger)
    }
}
      
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""