var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0

$(document).keydown(function(){
    if(!started){
        $("#level-title").html("Level:"+level);
        nextSeq();
        started=true;
    }
})

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
})

function nextSeq(){
    level++;
    $("#level-title").html("Level:"+level);

    var randomVar=Math.random()*4;
    randomVar=Math.floor(randomVar);
    var randomChosenColour=buttonColours[randomVar];  //choosing a random color
    gamePattern.push(randomChosenColour);   

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);   //flashing an element

    playSound(randomChosenColour);

}

 
function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");
   
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100)
 
}




