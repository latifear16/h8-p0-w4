function highestScore (students) {

var data = {}

if (students.length === 0) {
    return {}
}

for (i = 0; i < students.length; i++) {

    namaKelas = students[i].class
    if (!data[namaKelas]) {
        var nilaiTertinggi = 
            {
                name : students[i].name,
                score : students[i].score
            }
            data[namaKelas] = nilaiTertinggi
            
        }
        
        else {
            if (data[namaKelas].score < students[i].score) {
                data[namaKelas].name = students[i].name;
                data[namaKelas].score = students[i].score;
               
            }
        }
    } 

    return data

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}