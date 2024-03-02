let title=document.getElementById("title");
let Decrement=document.getElementById("Decrement");
let Reset=document.getElementById("Reset");
let Increment=document.getElementById("Increment");
let no=0;

decrese=()=>
{
    no--;
    console.log(no);
    title.innerText=no;
}

increse=()=>
{
    no++;
    console.log(no);
    title.innerText=no;
}


reset=()=>{
    no=0;
    console.log(no);
    title.innerText=no;
}

Decrement.addEventListener("click",decrese);

Increment.addEventListener("click",increse);

Reset.addEventListener("click",reset);
