let img;
let angle = 0;

function setup() {
  createCanvas(400, 450);
  img = loadImage('img/zahnrad_offical.png');
  angleMode(DEGREES);
  
  
}

function draw(){ 
   
}

function mouseReleased(){
    background('img/hintergrund_5.jpg');
    translate(200,225);
    rotate(angle);
    imageMode(CENTER);
    image(img, 0, 0, img.width / 2, img.height / 2);
    
    angle = angle + 12;   
}
