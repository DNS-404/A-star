function Node(i,j,cols,rows) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.show = function(color) {
    fill(color);
    let w = width/cols, h = height/rows;
    rect(this.x*w, this.y*h, w, h);
  }
}
