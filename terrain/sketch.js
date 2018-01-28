var cols ,rows;
var scl =20;
var w =1400;
var h =1000;

var flying = 0;

 var terrain =[] ;
function setup() {
 createCanvas(600 , 600 ,WEBGL) ;
    cols =w/scl;
    rows =h/scl;
    for(var x =0; x<cols;x++){
        terrain[x] =[];
        for(var y =0 ; y<rows ;y++){
            terrain[x][y] =0 ;
        }
    }
}

function draw() {
    flying-=0.01;
    var yoff =flying;
    for(var y = 0; y<rows ; y++){
        var xoff = 0;
        for(var x = 0 ;x< cols ;x++){
        
            terrain[x][y] = random(xoff ,yoff);
            xoff+=0.1;
        }
        yoff+=0.1;
    }
background(0);
    translate(0,50);
    frameRate(2);
    rotateX(PI/3);
    fill(200,200,200,50);
    translate(-w/2 ,-h/2);
    for(var y=0;y<rows-1;y++){
        beginShape(TRIANGLE_STRIP);
        for(var x=0;x<cols;x++){
            vertex(x*scl ,y*scl ,terrain[x][y]);
            vertex(x*scl ,(y+1)*scl ,terrain[x][y+1]);
        }
    endShape();
    }

}