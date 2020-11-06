//Naming variables for main sprites
var wall
var bullet;
var speed, weight, thickness;

function setup() 
{
  createCanvas(1600, 400);

  //Adding random values to these actions
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  //Creating sprite for bullet
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255); 

  //Creating sprite for wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(230, 230, 230);

  //Adding a mark for collidation of car
  //car.debug = true;
  console.log("Come on Abhinav you can do this...You can break this algorithm");
  print("You can do this");
}

function draw() 
{
  background(0); 
  
  //Adding an algorithm for the collision detection between the car with respect to speed and wall
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX =  0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}


function hasCollided(Lbullet, Lwall)
  {
    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;
    
    if(bulletRightEdge >= wallLeftEdge)
    {
      return true
    }
    return false;
  }
