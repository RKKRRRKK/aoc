const fs = require('fs');

 

fs.readFile('day2.txt', { encoding: 'utf8' }, (err, data) => {


let lines = data.split('\r\n')
 
let safe2 = 0
let unsafe2 = 0

for (let i = 0; lines.length > i; i++) {
    let o_line = lines[i].split(' ')
 
    let safe = 0
    let unsafe = 0


  for (let y = -1; o_line.length > y; y++) 
  {  
    let s_row = [];
    let safe_levels = []
    let unsafe_levels = []
    let line
    if (y == -1) {
console.log("HERE")
    line = o_line
    }
    else {
    line = o_line.slice(0, y).concat(o_line.slice(y + 1));
    }
    console.log(line)
    for (let x = 0; line.length > x + 1; x++) {
       let n = line[x] - line[x + 1]
       s_row.push(n)
    }
    


    for (let x = 0; s_row.length > x + 1; x++) {
    if ((s_row[x] > 0 && s_row[x + 1] > 0) || (s_row[x] < 0 && s_row[x +1] < 0))
    {
      if (Math.abs(s_row[x]) < 4 && Math.abs(s_row[x + 1]) < 4)  
      {
        safe_levels.push(s_row[x])
        
      }
    else {
        unsafe_levels.push(s_row[x])
    }
    }
    else {
        unsafe_levels.push(s_row[x])
    }

     }
   if (unsafe_levels.length > 0) {
     unsafe++
   }
   else {
    safe++
   }



  }

  if (safe > 0) {
    safe2++
  }
  else {
    unsafe2++
  }

}

console.log(safe2)

})


