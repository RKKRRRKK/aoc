const fs = require('fs');


//function that check similarity so I can see when sorting stops having an effect 
function calculateSimilarityPercentage(list1, list2) {
    let matches = 0;
    const total = list1.length;

    for (let i = 0; i < total; i++) {
        const arr1 = list1[i];
        const arr2 = list2[i];

        if (arraysEqual(arr1, arr2)) {
            matches++;
        }
    }


    const percentage = (matches / total) * 100;
    return percentage;
}

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

//file parsing
fs.readFile('day5.txt', { encoding: 'utf8' }, (err, data) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
 

    let pre = data.split('\r\n\r\n');
    pre = pre.map(rule => rule.split('\r\n'));

    let rules = pre[0];
    let ins = pre[1];

    let sep_rules1 = rules.map(rule => rule.split('|').map(Number));
    let sep_rules = [...sep_rules1]
  

    let ordered = []
    i = 0
    while (i < 10000000000)  //
    {
     let position1 = getRandomInt(1176)
     let position2 = getRandomInt(1176)


     if (sep_rules[position1][1] == sep_rules[position2][0])
     {
        if (position1 > position2) {
        let inter = sep_rules[position2]
        sep_rules[position2] = sep_rules[position1]
        sep_rules[position1] = inter 
        }
        else {
            let inter = sep_rules[position1]
        sep_rules[position1] = sep_rules[position2]
        sep_rules[position2] = inter 
        }
     }

     i++

    }
 
 console.log(calculateSimilarityPercentage(sep_rules1, sep_rules))

let list_rules = sep_rules.flat()
//  console.log(list_rules)

//  console.log(ins)


ins = ins.map(ins => ins.split(','))
 
 let good_lines = []
for (let i =0; i < ins.length; i++){
    let index_ac = 0
    let line = ins[i]
    let indicator = true
    for (let j= 0; j < line.length; j++) {
    let number = Number(line[j])
    console.log(number)
    let index = list_rules.indexOf(number, index_ac)
   
    index_ac = index_ac + index 
    if (index == -1) {
        console.log("Broke out")
        indicator = false
        index_ac = 0 
        break
    }
    
    }
    if (indicator == true) {
    console.log(indicator)
   good_lines.push(line)
    }
}

console.log("number of good lines", good_lines.length)

let mid_numbers = good_lines.map(line => line[(Math.ceil(line.length/2))])
console.log(mid_numbers)
});

//545  731  751