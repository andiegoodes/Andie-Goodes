function setup() {
    // happens only once
    myCanvas = createCanvas(720,400);
    myCanvas.parent('myContainer');
}

function draw(){
    
    //happens for everu frame refresh of the browser (-60/s)
    background(150)
    //line(325,30,325,249);
    
    noFill();
    
    rect(250,30,150,220);
    stroke(0);
    rect(255,35,140,210);
    stroke(255);
    rect(260,40,130,200);
    stroke(0);
    rect(265,45,120,190);
    stroke(255);
    rect(270,50,110,180);
    stroke(0);
    rect(275,55,100,170);
    stroke(255);
    rect(280,60,90,160);
    stroke(0);
    rect(285,65,80,150);
    stroke(255);
    rect(290,70,70,140);
    stroke(0);
    rect(295,75,60,130);
    stroke(255);
    rect(300,80,50,120);
    stroke(0);
    rect(305,85,40,110);
    stroke(255);
    rect(310,90,30,100);
    stroke(0);
    rect(315,95,20,90);
    stroke(255);
    rect(320,100,10,80);
    stroke(0);
    rect(325,105,0,70);
    stroke(255);

    noFill();
    line(252.5,30,252.5,250);
    stroke(255);
    line(257.5,30,257.5,250);
    stroke(0);
    line(262.5,30,262.5,250);
    stroke(255);
    line(267.5,30,267.5,250);
    stroke(0);
    line(272.5,30,272.5,250);
    stroke(255);
    line(277.5,30,277.5,250);
    stroke(0);
    line(282.5,30,282.5,250);
    stroke(255);
    line(287.5,30,287.5,250);
    stroke(0);
    line(292.5,30,292.5,250);
    stroke(255);
    line(297.5,30,297.5,250);
    stroke(0);
    line(302.5,30,302.5,250);
    stroke(255);
    line(307.5,30,307.5,250);
    stroke(0);
    line(312.5,30,312.5,250);
    stroke(255);
    line(317.5,30,317.5,250);
    stroke(0);
    line(322.5,30,322.5,250);
    stroke(255);
    line(327.5,30,327.5,250);
    stroke(0);
    line(332.5,30,332.5,250);
    stroke(255);
    line(337.5,30,337.5,250);
    stroke(0);
    line(342.5,30,342.5,250);
    stroke(255);
    line(347.5,30,347.5,250);
    stroke(0);
    line(352.5,30,352.5,250);
    stroke(255);
    line(357.5,30,357.5,250);
    stroke(0);
    line(362.5,30,362.5,250);
    stroke(255);
    line(367.5,30,367.5,250);
    stroke(0);
    line(372.5,30,372.5,250);
    stroke(255);
    line(377.5,30,377.5,250);
    stroke(0);
    line(382.5,30,382.5,250);
    stroke(255);
    line(387.5,30,387.5,250);
    stroke(0);
    line(392.5,30,392.5,250);
    stroke(255);
    line(397.5,30,397.5,250);
    stroke(0);
   

    noFill();
    //body 
    circle (325,140,150);
    stroke(255);
    circle (325,140,145);
    stroke(0);
    circle (325,140,140);
    stroke(255);
    circle (325,140,135);
    stroke(0);
    circle (325,140,130);
    stroke(255);
    circle (325,140,125);
    stroke(0);
    circle (325,140,120);
    stroke(255);
    circle (325,140,115);
    stroke(0);
    circle (325,140,110);
    stroke(255);
    circle (325,140,105);
    stroke(0);
    circle (325,140,100);
    stroke(255);
    circle (325,140,95);
    stroke(0);
    circle (325,140,90);
    stroke(255);
    circle (325,140,85);
    stroke(0);
    circle (325,140,80);
    stroke(255);
    circle (325,140,75);
    stroke(0);
    circle (325,140,70);
    stroke(255);
    circle (325,140,65);
    stroke(0);
    circle (325,140,60);
    stroke(255);
    circle (325,140,55);
    stroke(0);
    circle (325,140,50);
    stroke(255);
    circle (325,140,45);
    stroke(0);
    circle (325,140,40);
    stroke(255);
    circle (325,140,35);
    stroke(0);
    circle (325,140,30);
    stroke(255);
    circle (325,140,25);
    stroke(0);
    circle (325,140,20);
    stroke(255);
    circle (325,140,15);
    stroke(0);
    circle (325,140,10);
    stroke(255);
    circle (325,140,5);
    stroke(0);
    circle (325,140,1);
    stroke(255);
 

   


    helperCoordinates();
 }
function helperCoordinates() {
    fill(0);
    text(
        '(' + 
        floor(mouseX) +
        ',' +
        floor(mouseY) +
        ')',
        mouseX,
        mouseY
    );
}