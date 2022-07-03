function preload()
{
    console.log("preload");
}



function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(340, 240);
  //capture.hide();
}

function draw() {
  background(255);
 fill(97, 16, 16)
 circle(380, 10, 20);
 circle(380, 230, 20);
 circle(1000, 230, 20);

  
}



function take_snapshot()
{
    save("selfie.png")
}