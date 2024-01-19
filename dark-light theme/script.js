let button1=document.querySelector("#btn1");
button1.onclick=()=>{
    console.log("button clicked");
    let a=0;
    a++;
    console.log(a);
}

let box=document.getElementById('div1');
box.onmouseover=(e)=>{
    console.log("indide div box");
    console.log(e.type);
    console.log(e.target);
   console.dir(e);
}