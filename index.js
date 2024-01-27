var color=["green", "red", "yellow", "blue"];
var correct= true;
var randomChosenColor=[];
var userPattern=[];
var level= 0;
$(document).keypress(function(){
    if(correct==true){
        randomGen();
        correct=false;
    }
})
$("button").on("click",function(){
    var userClick=$(this).attr("id");
    userPattern.push(userClick);
    console.log(userPattern);
    checkAns(userClick);
    playTune(userClick);
    animatePress(userClick);
})
function randomGen(){
    level=level+1;
    $('h1').text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var chosenColor=color[randomNumber];
    randomChosenColor.push(chosenColor);
    $("#"+chosenColor).animate({opacity: "0.3"}).animate({opacity: "1"});
    playTune(chosenColor);
    
}
function playTune(chosenColor1){
    console.log(chosenColor1)
    var audio1 = new Audio("sounds/" + chosenColor1 + ".mp3");
    audio1.play();
    }
function animatePress(chosenColor2){
    $("."+chosenColor2).addClass("pressed");
    setTimeout(function(){
        $("."+chosenColor2).removeClass("pressed")},200);  
}
function checkAns(){
    var leng=userPattern.length;
    if(userPattern[leng-1]!=randomChosenColor[leng-1]){
        playTune("wrong");
        $("body").addClass("wrong");
        setTimeout(function(){$("body").removeClass("wrong");},1000);
        $("h1").text("Game Over!! Press Any Key To Restart");
        restartGame();
        correct=true;
    }
    else{
        if(leng==randomChosenColor.length){
        userPattern=[];
        setTimeout(randomGen,1000);
        }
    }
}
function restartGame(){
    level=0;
    userPattern=[];
    randomChosenColor=[];
}
