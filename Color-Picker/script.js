let body1=document.getElementsByTagName("body");
console.table(body1);
let c=document.getElementById("color");
let getcolor=()=>
{
    let randomno=Math.floor(Math.random()*16777215);
    let randomhex="#"+randomno.toString(16);
    console.log(randomno,randomhex);
   document.body.style.backgroundColor = randomhex;
    c.innerHTML=randomhex;
}
let button=document.getElementById("btn");
button.addEventListener("click",getcolor);
getcolor();