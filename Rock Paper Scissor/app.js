let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#userchoice");
let comp=document.querySelector("#compchoice");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
let drawgame = () => {
    console.log("draw game");
    msg.innerHTML="Draw Game";
}

let showwinner=(userwin,userchoice,compchoice)=>{
   
   user.style.visibility = "visible";
  
   comp.style.visibility = "visible";
   user.textContent=userchoice;
   comp.textContent=compchoice;
    if(userwin)
    {
        console.log("user won");
        msg.innerHTML="User Won";
   }
    else 
    {
        console.log("computer won");
        msg.innerHTML="Computer Won";
    }
}
const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    user.innerHTML=userchoice;
    let compchoice = gencompchoice();
    console.log("compchoice", compchoice);
    comp.innerHTML=compchoice;
    if (userchoice === compchoice) {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
       else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice)
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let choiceid = choice.getAttribute("id");
        playgame(choiceid);
    })
});