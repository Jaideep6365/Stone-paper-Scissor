let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`YOU wIN :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText=`YOU LOSE!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=> {
    console.log("User choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp Choice is:",compChoice)

    if (userChoice===compChoice){
        console.log("It was a draw");
        msg.innerText="ITS A DRAW -_- TRY AGAIN";
        msg.style.backgroundColor="black";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true; 
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }); 
    
});