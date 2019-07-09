let cols = 5;
let rows = 5;
let grid = new Array(cols);

function setup() {
  createCanvas(400, 400);
  // 2d Array
  for(let i=0; i<cols; i++){
    grid[i] = new Array(rows);
  }

  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j] = new Node();
    }
  }
}

function draw() {
  background(0);
}
