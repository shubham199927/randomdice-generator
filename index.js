var randomDice1= Math.random()* 6;
randomDice1 = Math.ceil(randomDice1);
var randomDice2= Math.random() * 6;
randomDice2 = Math.ceil(randomDice2);

 document.querySelector(".img1").setAttribute("src","./images/dice" +randomDice1+".png");
 document.querySelector(".img2").setAttribute("src","./images/dice" +randomDice2+".png");

 if(randomDice1>randomDice2){
    document.querySelector("h1").textContent="🚩 Player 1 wins";
 }
 else if(randomDice1==randomDice2){
    document.querySelector("h1").textContent="It's a Draw";
 }
 else{
    document.querySelector("h1").textContent="Player 2 wins 🚩";
 }