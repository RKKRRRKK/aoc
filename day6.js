const fs = require('fs');

fs.readFile('day6.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;

   
  const originalGrid = data.split('\r\n');

  const directions = ['^', '>', 'v', '<'];
  const moves = {
    '^': [-1, 0],
    '>': [0, 1],
    'v': [1, 0],
    '<': [0, -1]
  };

  function turnRight(d) {
    let index = directions.indexOf(d);
    return directions[(index + 1) % 4];
  }

 
  function simulate(gridArr) {
    let grid = gridArr.map(row => row.split(''));

 
    let startRow = -1;
    let startCol = -1;
    let dir;

    outer:
    for (let r = 0; r < grid.length; r++) {
      let row = grid[r];
      for (let c = 0; c < row.length; c++) {
        if ('^>v<'.includes(row[c])) {
          startRow = r;
          startCol = c;
          dir = row[c];
          break outer;
        }
      }
    }

   

    grid[startRow][startCol] = 'X';

    let currentRow = startRow;
    let currentCol = startCol;
    let consecutiveXCount = 0; 

    while (true) {
      let triedDirections = 0;
      let moved = false;

      while (triedDirections < 4 && !moved) {
        const [dRow, dCol] = moves[dir];
        const newRow = currentRow + dRow;
        const newCol = currentCol + dCol;

        if (newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length) {
          //out of bounds
          moved = false;
          break;
        }

        const cell = grid[newRow][newCol];

        if (cell === '.') {
          currentRow = newRow;
          currentCol = newCol;
          grid[currentRow][currentCol] = 'X';
          moved = true;
          consecutiveXCount = 0; 
        } else if (cell === '#') {
          // turn right
          dir = turnRight(dir);
          triedDirections++;
        } else if (cell === 'X') {
          currentRow = newRow;
          currentCol = newCol;
          moved = true;
          consecutiveXCount++;
          if (consecutiveXCount >= 1000) {
            return { loopDetected: true, finalGrid: grid.map(r => r.join('')) };
          }
        } else {
          dir = turnRight(dir);
          triedDirections++;
        }
      }

      if (!moved) {
        break;
      }
    }

    const finalGrid = grid.map(row => row.join(''));
    return { loopDetected: false, finalGrid };
  }


  let { finalGrid, loopDetected } = simulate(originalGrid);
  console.log(finalGrid.join('\n'));
  const totalX = finalGrid.join('').split('').filter(char => char === 'X').length;
  console.log("total X", totalX);
  let loopCount = 0;
  for (let r = 0; r < originalGrid.length; r++) {
    for (let c = 0; c < originalGrid[r].length; c++) {
      if (originalGrid[r][c] === '.') {
        let modifiedGrid = originalGrid.map(line => line.split(''));
        modifiedGrid[r][c] = '#';
        modifiedGrid = modifiedGrid.map(row => row.join(''));

        let { loopDetected: loopHere } = simulate(modifiedGrid);
        if (loopHere) {
          loopCount++;
        }
      }
    }
  }

  console.log("loops", loopCount);

});