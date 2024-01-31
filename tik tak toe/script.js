let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turno=true;
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetbtn=()=>
{
    turno=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

box.forEach((b)=>{
    b.addEventListener("click",()=>{
        
        if(turno===true){
            b.innerHTML="x";
            turno=false;
        }
        else{
            b.innerHTML="o";
            turno=true;
        }
        b.disabled=true;
        checkwinner();
    })
});

const showwinner=(winner)=>{
    msg.innerHTML=`winner is ${winner}`;
    msgcontainer.classList.remove("hide");

};

const disablebox=()=>
{
    for(let b of box)
    {
        b.disabled=true;
    }
}

const enablebox=()=>
{
    for(let b of box)
    {
        b.disabled=false;
        b.innerHTML="";
    }
}

const checkwinner=()=>
{
    for(let pattern of winpattern)
    {
        
        let position1=box[pattern[0]].innerHTML;
        let position2=box[pattern[1]].innerHTML;
        let position3=box[pattern[2]].innerHTML;
        if(position1!="" && position2!="" && position3!="")
        {
            if(position1==position2 && position2==position3)
            {
                console.log("winner",position1);    
                showwinner(position1);
                disablebox();
            }
        }
    }
}

newgamebtn.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);