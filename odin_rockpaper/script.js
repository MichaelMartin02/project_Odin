window.onload=function(){


const button = document.querySelector('button');

button.addEventListener('click', function(){
    let userinput = prompt("Rock, paper, or Scissors?","");
    let CompChoice = Math.random();
    CompChoice = CompChoice.toFixed(1);


    //Computer Choice, slighlty biased to Scissors
if(CompChoice<=0.33){
    CompChoice="Rock";
}
else if (CompChoice> 0.33 && CompChoice< 0.66){
CompChoice="Paper";
}
else{
    CompChoice="Scissors";
}

console.log(CompChoice);


//Tie & Wind conditions

if (userinput === "Rock" || userinput === "Paper" || userinput == "Scissors"){
 if (userinput==="Rock" && CompChoice==="Rock" || userinput==="Scissors" && CompChoice==="Scissors" || userinput==="Paper" && CompChoice==="Paper"){
    alert(`Both players chose ${userinput}, resulting in a tie`);
}
else if (userinput==="Rock" && CompChoice==="Scissors" || userinput==="Paper" && CompChoice==="Rock" || userinput==="Scissors" && CompChoice==="Paper"){
    alert(`You chose ${userinput} and the computer chose ${CompChoice}, ${userinput} beats ${CompChoice}, Congrats!`);
}
else{
    alert(`You chose ${userinput} and the computer chose ${CompChoice}, ${CompChoice} beats ${userinput}, you loose, better luck next time`);
}

}
else{
    alert("Please Input a correct choice");
}

});

}