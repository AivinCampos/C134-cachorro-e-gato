img="";
object=[];
modelStatus="";

function preload()
{
img=loadImage('dog_cat.jpg');
}

function setup()
{
canvas=createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded()
{
console.log("modelo carregado")
modelStatus=true;
objectDetector.detect(img, gotResults);
}

function gotResult(error, results)
{
if (error)
{
console.log(error);
}
console.log(results);
object=results;
}



function draw()
{
image(img, 0, 0, 640, 420);
if(modelStatus != "")
{
for (i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status: Objeto Detectado";

fill("#FF0000");
percent = floor(objects[i].confidence * 100); text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}