var randomNum1=Math.random()*6;
randomNum1++;
randomNum1=Math.floor(randomNum1);

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");



var randomNum2=Math.random()*6;
randomNum2++;
randomNum2=Math.floor(randomNum2);

document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 has won !";
}else if(randomNum1===randomNum2){
    document.querySelector("h1").innerHTML="It's a Draw";
}else{
    document.querySelector("h1").innerHTML="Player 2 has won!";
}

