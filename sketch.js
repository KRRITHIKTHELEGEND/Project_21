var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(10,200,75,30);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background("black");
  bullet.velocityX = speed;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (bullet.isTouching(wall)) {
    bullet.x = wall.x;
  }
  if (damage < 10) {
    bullet.x = wall.x;
    background("green")
  }
  if (damage > 10) {
    bullet.x = wall.x;
    background("red")
  }
  drawSprites();
}