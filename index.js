document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");
randomNumber1 = Math.floor((Math.random()*6)+1);
randomNumber2 = Math.floor((Math.random()*6)+1);
var player1 = "images/dice"+randomNumber1+".png";
var player2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", player1);
document.querySelector(".img2").setAttribute("src", player2);
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 wins !";
}
if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 wins ! 🚩";
}
if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "It's a Draw !!";
}
