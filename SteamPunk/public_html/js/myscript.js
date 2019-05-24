let bg;
let img;
let uhr1;
let uhr2;
let uhr3;
let uhr4;
let uhr5;
let uhr6;
let uhr7;
let uhr8;
let uhr9;
let angle = 0;
let count = 0;
let anglepuzzle1 = 90;
let anglepuzzle2 = 180;
let anglepuzzle3 = 90;
let anglepuzzle4 = 360;
let anglepuzzle5 = 270;
let anglepuzzle6 = 270;
let anglepuzzle7 = 90;
let anglepuzzle8 = 180;
let anglepuzzle9 = 270;
let isPuzzleDone = false;

function checkPin(){
    var input01 = document.getElementById('ipOne').value;
    var input02 = document.getElementById('ipTwo').value;
    var input03 = document.getElementById('ipThree').value;
    var input04 = document.getElementById('ipFour').value;
    
    console.log(input01 + input02 + input03 + input04);
    if (input01 == 4 && input02 == 2 && input03 == 6 && input04 == 9){
        //alert("YOU WIN!!!");
        console.log('Well Done.');
        document.getElementById('check').checked = true;
        socket.emit("check", Number(document.getElementById('check').checked));
    }else{
        alert("Game Over.");
        location.reload();
        console.log('Game Over.');
    }
}

function setup() {
  bg = loadImage('img/BGiPadhiii.png');
  img = loadImage('img/zahnrad_offical.png');
  uhr1 = loadImage('img/uhr_1.png');
  uhr2 = loadImage('img/uhr_2.png');
  uhr3 = loadImage('img/uhr_3.png');
  uhr4 = loadImage('img/uhr_4.png');
  uhr5 = loadImage('img/uhr_5.png');
  uhr6 = loadImage('img/uhr_6.png');
  uhr7 = loadImage('img/uhr_7.png');
  uhr8 = loadImage('img/uhr_8.png');
  uhr9 = loadImage('img/uhr_9.png');
  createCanvas(1366, 1024);
  angleMode(DEGREES);
}

function draw(){
    background(bg);
    translate(235, 300);
    // https://p5js.org/reference/#/p5/pop
   
    push();
    
   
    rotate(angle);
    imageMode(CENTER);
    image(img, 0, 0, img.width / 2, img.height / 2);imageMode(CENTER);
    pop();
    
    push();
    translate(790,360);
    rotate(anglepuzzle1);
    imageMode(CENTER);
    image(uhr1, 0, 0, uhr1.width, uhr1.height);imageMode(CENTER);
    pop();
    
    push();
    translate(890,360);
    rotate(anglepuzzle2);
    imageMode(CENTER);
    image(uhr2, 0, 0, uhr2.width, uhr2.height);imageMode(CENTER);
    pop();
    
    push();
    translate(990,360);
    rotate(anglepuzzle3);
    imageMode(CENTER);
    image(uhr3, 0, 0, uhr3.width, uhr3.height);imageMode(CENTER);
    pop();
    
    push();
    translate(790,460);
    rotate(anglepuzzle4);
    imageMode(CENTER);
    image(uhr4, 0, 0, uhr4.width, uhr4.height);imageMode(CENTER);
    pop();
    
    push();
    translate(890,460);
    rotate(anglepuzzle5);
    imageMode(CENTER);
    image(uhr5, 0, 0, uhr5.width, uhr5.height);imageMode(CENTER);
    pop();
    
    push();
    translate(990,460);
    rotate(anglepuzzle6);
    imageMode(CENTER);
    image(uhr6, 0, 0, uhr6.width, uhr6.height);imageMode(CENTER);
    pop();
    
    push();
    translate(790,560);
    rotate(anglepuzzle7);
    imageMode(CENTER);
    image(uhr7, 0, 0, uhr7.width, uhr7.height);imageMode(CENTER);
    pop();
    
    push();
    translate(890,560);
    rotate(anglepuzzle8);
    imageMode(CENTER);
    image(uhr8, 0, 0, uhr8.width, uhr8.height);imageMode(CENTER);
    pop();
    
    push();
    translate(990,560);
    rotate(anglepuzzle9);
    imageMode(CENTER);
    image(uhr9, 0, 0, uhr9.width, uhr9.height);imageMode(CENTER);
    pop();
    
    
    
    
}

function mouseReleased(){
    if (mouseX < 400 && mouseY < 450 && count < 13){
    angle = angle + 12;  
    count += 1;
    console.log(count);
    }
    if (mouseX < 1070 && mouseX > 1010 && mouseY < 680 && mouseY > 600 && !isPuzzleDone){
         anglepuzzle1 = anglepuzzle1 + 90;  
    }
    if (mouseX < 1170 && mouseX > 1110 && mouseY < 680 && mouseY > 600 && !isPuzzleDone){
         anglepuzzle2 = anglepuzzle2 + 90; 
    }
    if (mouseX < 1270 && mouseX > 1210 && mouseY < 680 && mouseY > 600 && !isPuzzleDone){
        anglepuzzle3 = anglepuzzle3 + 90;
    }
    if (mouseX < 1070 && mouseX > 1010 && mouseY < 780 && mouseY > 700 && !isPuzzleDone){
        anglepuzzle4 = anglepuzzle4 + 90;
    }
    if (mouseX < 1170 && mouseX > 1110 && mouseY < 780 && mouseY > 700 && !isPuzzleDone){
        anglepuzzle5 = anglepuzzle5 + 90;
    }
    if (mouseX < 1270 && mouseX > 1210 && mouseY < 780 && mouseY > 700 && !isPuzzleDone){
        anglepuzzle6 = anglepuzzle6 + 90;
    }
    if (mouseX < 1070 && mouseX > 1010 && mouseY < 880 && mouseY > 800 && !isPuzzleDone){
        anglepuzzle7 = anglepuzzle7 + 90;
    }
    if (mouseX < 1170 && mouseX > 1110 && mouseY < 880 && mouseY > 800 && !isPuzzleDone){
        anglepuzzle8 = anglepuzzle8 + 90;
    }
    if (mouseX < 1270 && mouseX > 1210 && mouseY < 880 && mouseY > 800 && !isPuzzleDone){
        anglepuzzle9 = anglepuzzle9 + 90;
    }
    if ((anglepuzzle1%360 == 0 || anglepuzzle1 == 0)&&
            (anglepuzzle2%360 == 0 || anglepuzzle2 == 0)&&
            (anglepuzzle3%360 == 0 || anglepuzzle3 == 0)&&
            (anglepuzzle4%360 == 0 || anglepuzzle4 == 0)&&
            (anglepuzzle5%360 == 0 || anglepuzzle5 == 0)&&
            (anglepuzzle6%360 == 0 || anglepuzzle6 == 0)&&
            (anglepuzzle7%360 == 0 || anglepuzzle7 == 0)&&
            (anglepuzzle8%360 == 0 || anglepuzzle8 == 0)&&
            (anglepuzzle9%360 == 0 || anglepuzzle9 == 0)){
        isPuzzleDone = true;
        console.log('Puzzle Done.');
    }
}
