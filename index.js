var number1 =Math.floor((Math.random()*6)+1);  // generate number  from 1-6.
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ number1 + ".png");


var number2 =Math.floor((Math.random()*6)+1);  // generate number  from 1-6.
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ number2 + ".png");

if(number1>number2){
    document.querySelector("h1").innerHTML="🌈 Player 1 Wins";
} else if(number1<number2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🌈";
}else{
document.querySelector("h1").innerHTML="Oops DRAW";
}