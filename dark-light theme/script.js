let button1=document.getElementById('btn1');
let body1=document.querySelector("body");
let theme="light";
let func1=()=>
{
    if(theme==="light")
    {
        theme="black";
        body1.style.backgroundColor="black";
    }
    else{
        theme="light";
        body1.style.backgroundColor="white";
    }
    console.log(theme);
}
button1.addEventListener("click",func1);