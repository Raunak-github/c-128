song_name1 = "";
song_name2 = "";
LX = 0;
LY = 0;
RX = 0;
RY = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.hide();
    
    canvas = createCanvas(500, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video, 0, 0 , 500 ,500);
}
function preload()
{
    song_name1 = loadSound("Harry_potter.mp3");
    song_name2 = loadSound("Peter_Pan.mp3");
}
function modelLoaded()
{
    console.log("model has been loaded successfully.");
}
function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);

        LX = results[0].pose.leftWrist.x;
        LY = results[0].pose.leftWrist.y;
        RX = results[0].pose.rightWrist.x;
        RY = results[0].pose.rightWrist.y;
    }
}