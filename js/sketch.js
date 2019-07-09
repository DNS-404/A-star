let cols = 50;
let rows = 50;
let grid = new Array(cols);

let openSet = []; // nodes not visited yet
let closedSet = []; // nodes visited
let start, end;
let path = [];

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
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j].addNeighbors(grid);
    }
  }
  start = grid[0][0];
  end = grid[cols-1][rows-1];
  start.wall = false;
  end.wall = false;
  openSet.push(start); // starting with open set
}


function draw() {

  if(openSet.length > 0){
    // getting element with lowest f value
    let lowestNodeIndex = 0;
    for(let i=0; i<openSet.length; i++) {
      if(openSet[i].f < openSet[lowestNodeIndex].f){
        lowestNodeIndex = i;
      }
    }
    var current = openSet[lowestNodeIndex];

    if(current === end){
      noLoop();
      console.log("DONE!");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    let neighbors = current.neighbors;
    for(neighbor of neighbors){
      if(!closedSet.includes(neighbor) && !neighbor.wall){
        let tempGScore = current.g + 1;
        if(openSet.includes(neighbor)){
          if(tempGScore < neighbor.g){
            neighbor.g = tempGScore;
          }
        } else {
          neighbor.g = tempGScore;
          openSet.push(neighbor);
        }
        neighbor.h = heuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.previous = current;
      }
    }

  } else {
    // no solution
    console.log('no solution');
    noLoop();
    return;
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

  // Find the path
  path = [];
  let temp = current;
  path.push(temp);
  while(temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  for(let i=0; i<path.length; i++){
    path[i].show(color(0,0,255));
  }
}


function removeFromArray(arr, elt){
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i] == elt){
      arr.splice(i, 1);
      break;
    }
  }
}

function heuristic(a, b){
  return dist(a.i,a.j,b.i,b.j);
  // return abs(a.i-b.i) + abs(a.j-b.j);
}
