let cols = 5;
let rows = 5;
let grid = new Array(cols);

let openSet = []; // nodes not visited yet
let closedSet = []; // nodes visited
let start, end;

function setup() {
  createCanvas(400, 400);
  print("A*");
  // 2d Array
  for(let i=0; i<cols; i++){
    grid[i] = new Array(rows);
  }

  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j] = new Node(i,j,cols,rows);
    }
  }

  start = grid[0][0];
  end = grid[cols-1][rows-1];

  openSet.push(start); // starting with open set
}

function draw() {

  if(openSet.length > 0){
    // keep going
  } else {
    // no solution
  }

  background(0);

  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j].show(color(255));
    }
  }

  for(let i=0; i<closedSet.length; i++){
    closedSet[i].show(color(255,0,0));
  }

  for(let i=0; i<openSet.length; i++){
    openSet[i].show(color(0,255,0));
  }
}
