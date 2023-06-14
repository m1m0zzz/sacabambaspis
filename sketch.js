const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

function setup() {
  createCanvas(width, height);
}

let ox = 100;
let oy = 200;
let dx = 2;
let dy = 2;

function draw() {
  background(220);

  // move
  if (50 > ox || ox > width - 50)
    dx *= -1
  if (25 > oy || oy >= height - 25)
    dy *= -1

  ox += dx;
  oy += dy;

  // draw
  noStroke();
  fill(245);
  rect(0, oy + 10, width, height);

  const eyesW = 30;
  // 白目
  strokeWeight(1);
  stroke(0);
  circle(ox - eyesW, oy - 8, 20);
  circle(ox + eyesW, oy - 8, 20);

  // 黒目
  fill(0);
  circle(ox - eyesW, oy - 8, 10);
  circle(ox + eyesW, oy - 8, 10);

  // 鼻
  fill(0);
  circle(ox - 6, oy - 2, 2);
  circle(ox + 6, oy - 2, 2);

  // 口
  fill(100);
  triangle(ox - 20, oy + 3, ox + 20, oy + 5, ox, oy + 13);
}
