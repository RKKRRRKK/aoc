const fs = require('fs');

 

fs.readFile('day3.txt', { encoding: 'utf8' }, (err, data) => {
    

const regex = /mul\((\d*),(\d*)\)/g
const regexNum = /\d{1,}/g
const regexCom = /\bdo\b|\bdon't\b/g
let total = 0
const commands = [...data.matchAll(regexCom)].map(match => match[0]);
const matches = [...data.matchAll(regex)].map(match => match[0]);


const regexNumCom = /mul\((\d*),(\d*)\)|\bdo\b|\bdon't\b/g 
const numcom = [...data.matchAll(regexNumCom)].map(match => match[0]);
console.log(numcom)
let state = "do"

for (let i = 0; i < numcom.length; i++)
{
    let product = 0
    
    if (numcom[i] == "don't") 
     {
        state = "don't"
        continue;
    }

    if (numcom[i] == "do") 
        {
           state = "do"
           continue;
       }

    if (state == 'do') {
    let numbers = [...numcom[i].matchAll(regexNum)].map(match => match[0]);

    product = numbers[0] * numbers[1]
    }

    total += product
}

console.log(total)

}
)