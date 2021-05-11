
difference = 0;
left_wristX = 0;
right_wristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 680);

    canvas = createCanvas(560 , 600);
    canvas.position(560 , 200);

    posenet = ml5.poseNet(video , model_loader);
    posenet.on('pose' , got_Pose);
}

function model_loader(){
    console.log("Model_LOADED");

}

function got_Pose(results){
    if(results.length > 0 ){


        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor( left_wristX - right_wristX);
        textSize(difference);

        console.log("Left Wrist " + left_wristX + " Right Wrist " + right_wristX + " Difference " + difference);
    }
}

function draw(){
    background('#949292');
    textSize(10);
    fill("#24eded");
    text(Aditi,10,10)
    document.getElementById("text_size").innerHTML = "The size of the text is  " + difference + " px ";
    

    
}