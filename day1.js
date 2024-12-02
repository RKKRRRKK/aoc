const fs = require('fs');

function compareNumbers(a, b) {
    return a - b;
  }

fs.readFile('day1.txt', { encoding: 'utf8' }, (err, data) => {


    let split = data.split('\r\n')
    let column1 = []
    let column2 = []
    for (let i = 0; i < split.length;  i++)
    {
     let subsplit = split[i].split('   ')
     column1.push(Number(subsplit[0]))
     column2.push(Number(subsplit[1]))
    }

     column1 =  column1.sort(compareNumbers)
     column2 = column2.sort(compareNumbers)

    //  console.log(column1)

let total_distance = 0
  for (let i = 0; i < column1.length; i ++) {
    
    let distance = column1[i] - column2[i]
    total_distance += Math.abs(distance) 
  }

//   console.log(total_distance) part 1 

column2_obj = {}

for (let i = 0; i < column2.length; i++) {
    if (!column2_obj[column2[i]])
        column2_obj[column2[i]] = 0;
    column2_obj[column2[i]]++ 
}

let similarity_array = column1.map((number) =>  number *   (column2_obj[number] ?? 0))

// for (let i = 0; i < similarity_array.length; i++) {
//   if (isNaN(similarity_array[i])) (
//     similarity_array[i] = 0
//   )
// }

let simil = similarity_array.reduce((x, y) => x + y, 0)

console.log(simil)  //part 2

  });