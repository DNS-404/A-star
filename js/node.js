function Node(i,j,cols,rows) {
  this.i = i;
  this.j = j;
  this.f = 0; // f = g + h
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if(random(1) < 0.3){
    this.wall = true;
  }

  this.show = function(color) {
    fill(color);
    if(this.wall) {
      fill(0);
    }
    let w = width/cols, h = height/rows;
    rect(i*w, j*h, w, h);
  }

  this.addNeighbors = function(grid) {
    if(i < cols-1) {this.neighbors.push(grid[i+1][j]);}
    if(i > 0) {this.neighbors.push(grid[i-1][j]);}
    if(j < rows-1) {this.neighbors.push(grid[i][j+1]);}
    if(j > 0) {this.neighbors.push(grid[i][j-1]);}
  }
}
