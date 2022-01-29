song1="";
song2="";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.center();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initializing')
}

function draw(){
    image(video,0,0,600,500);
}

function gotPoses(results){
    if(results > 0){
        console.log(results);

        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("LeftWirstX = " + leftX + "LeftWirstY = " + leftY)

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("RightWirstX = " + rightX + "RightWirstY = " + rightY)
    }
}