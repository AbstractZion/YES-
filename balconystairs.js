var img="";
var status1=" ";
objectDetector=" ";
objects=[];

function preload(){
    img=loadImage('balconystairs.jpg');
}

function setup(){
    canvas=createCanvas(500,620);
    canvas.center();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
    console.log("modell iss beingg loadedd 👍");
    status1=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    if(status1 != undefined){
        image(img,0,0,500,620);
        for(var i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are: "+objects.length;
            fill("#5cc7ed");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+5,objects[i].y+15);
            noFill();
            stroke("#5cc7ed");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
} 