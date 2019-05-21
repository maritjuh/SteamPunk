let img;
let angle = 0;
let count = 0;

function setup() {
  createCanvas(400, 450);
  img = loadImage('img/zahnrad_offical.png');
  angleMode(DEGREES);
}

function mouseReleased(){
    if (mouseX < 400 && mouseY < 450 && count < 14){
    background('img/hintergrund_5.jpg');
    translate(200,225);
    rotate(angle);
    
    imageMode(CENTER);
    image(img, 0, 0, img.width / 2, img.height / 2);
    angle = angle + 12;  
    
    count += 1;
    console.log(count);
    }
}
