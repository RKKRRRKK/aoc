console.time("dbsave");
const fs = require('fs');

fs.readFile('day7.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;

  let split = data.split("\r\n")
  let results = split.map(line => Number(line.split(':')[0]))
  let calcs = split.map(line => line.split(':')[1].trim().split(' '))
  let ncalc = calcs.map(calc => calc.map(ncalc => Number(ncalc)))

    function canReachTarget(numbers, target, currentIndex = 0, currentValue = numbers[0]) {
        //base case
        if (currentIndex === numbers.length - 1) {
          return currentValue === target;
        }
    
        const nextNum = numbers[currentIndex + 1];
        //add
        if (canReachTarget(numbers, target, currentIndex + 1, currentValue + nextNum)) {
          return true;
        }
       //multiply
        if (canReachTarget(numbers, target, currentIndex + 1, currentValue * nextNum)) {
          return true;
        }
        //concat
        if (canReachTarget(numbers, target, currentIndex + 1, Number("", currentValue + nextNum))) {
            return true;
          }
    
        return false;
      }
    
       let targets = 0
      for (let i = 0; i < results.length; i++) {
        let numbers = ncalc[i];
        let target = results[i];
        if (canReachTarget(numbers, target)) {
           targets += target
        } else {
        }
      }
      console.log(targets)
      console.timeEnd("dbsave");
    
    });






//   for (let i = 0; i < results.length; i++) {
//      let iterator = ncalc[i]
//      let condition = 0
//      while (!(condition == results[i])) {
//      for (let j =0; j < iterator.length; j++) {
//        condition *= ncalc[i][j]
//      }
//     }

//   }


// }
// )