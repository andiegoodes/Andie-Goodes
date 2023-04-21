function preload() {
    img = loadImage ('./images/subway.png');
}

function setup() {
    myCanvas = createCanvas(720,400);
    myCanvas.parent('myContainer');
    image(img, 0,0, width, height, 0,0 img.width, img.height, COVER);
}

function draw(){
    
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