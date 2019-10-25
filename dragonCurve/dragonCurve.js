let x;
let y;
let dir;

function setup() {
  createCanvas(800, 800);
  
  stroke(0, 0, 206); // blue
  x= width/2;
  y = height/2;
  dir=0;
  dragon(15, 1);
  // noStroke()
    stroke(color(206, 0, 0)); // red
  x= width/2;
  y = height/2;
  dir=90;

  dragon(15, 1);
      stroke(color(240, 240, 0)); // yellow
  x= width/2;
  y = height/2;
  dir=180;

  dragon(15, 1);
  stroke(color(0, 205,100)); // green
  x= width/2;
  y = height/2;
  dir=270;

  dragon(15, 1);
}

function draw() {  
}

function dragon(order, len) {
  let s = ['R']
  // new string add R, reverse old, invert and add to end.
  for (let i = 0; i < order; i++) {
      let next = [ ...s.slice(), 'R' ];
      s= s.reverse();
      for (let el of s) {
         if (el === 'R')
           next.push('L')
         else
           next.push('R')
      }
      s = next;
  }
  // correct format.

  for (let direction of s) {
      if ( direction === 'R' ) {
        dir += 90;
      } else if (direction === 'L') {
        dir -= 90;
      }

      if (dir > 270) {
          dir = 0;
      } else if (dir < 0) {
          dir = 270;
      }
      switch(dir) {
          case 0:
            line(x, y, x, y - len)
            y -= len;
            break;
          case 90:
            line(x, y, x + len, y)
            x += len;
            break;
          case 180:
            line(x, y, x, y + len)
            y += len;
            break;
          case 270:
            line(x, y, x - len, y)
            x -= len;
            break;
          default:
            console.log('AHHHGGG');
      }
  }
}
