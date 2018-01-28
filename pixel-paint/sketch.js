var video;
var vScale =16;
var particles= [];
var slider;

function setup() {
createCanvas(window.innerWidth,window.innerHeight);
    pixelDensity(1),
        video =createCapture(VIDEO);
    video.size(width/vScale,height/vScale );
    for(var i=0;i<200;i++){
        particles[i]=new Particle(random(width) ,random(height));
    }
    slider=createSlider(0,255,127);
    background(51);
}

function draw() {
 //ckground(51);
    video.loadPixels();
    for(var i=0;i<particles.length;i++){
        particles[i].update();
        particles[i].show();
    }
}