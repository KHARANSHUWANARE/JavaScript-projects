let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turno=true;
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

box.forEach((b)=>{
    b.addEventListener("click",()=>{
        console.log("btn clicked");
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

const checkwinner=()=>
{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]].innerHTML,box[pattern[1]].innerHTML,box[pattern[2]].innerHTML);
    }
}