let bg;
let img;
let angle = 0;
let count = 0;

function checkPin(){
    var intput01 = document.getElementById('ipOne').value;
    var intput02 = document.getElementById('ipTwo').value;
    var intput03 = document.getElementById('ipThree').value;
    var intput04 = document.getElementById('ipFour').value;
    
    if (input01 == 4 && input02 == 2 && input03 == 6 && input04 == 9){
        console.log('Happy Brithday');
    }else{
        console.log('well...you dead');
    }
}

function setup() {
  bg = loadImage('img/BGiPad.png');
  img = loadImage('img/zahnrad_offical.png');
  createCanvas(1366, 1024);
  angleMode(DEGREES);
}

function draw(){
    background(bg);
    translate(235, 300);
    rotate(angle);
    // https://p5js.org/reference/#/p5/pop
    push();
    imageMode(CENTER);
    image(img, 0, 0, img.width / 2, img.height / 2);imageMode(CENTER);
    pop();
}

function mouseReleased(){
    if (mouseX < 400 && mouseY < 450 && count < 13){
    angle = angle + 12;  
    count += 1;
    console.log(count);
    }
}
