function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
   
}

function draw(){
    
    image(video,40,40,560,400);
    fill("green")
    stroke("green")
    rect(60,20,520,40)
    rect(60,420,520,40)
    rect(20,60,40,360)
    rect(580,60,40,360)



    fill("red")
    stroke("red")
    circle(40,40,80)
    circle(600,40,80)
    circle(40,440,80)
    circle(600,440,80)
    
}



function take_snapshot(){
    save("image.png");
}