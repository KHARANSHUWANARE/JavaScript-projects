let time=document.getElementById("current-time");
let date=document.getElementById("current-date");

function changetime()
{
    let d=new Date();
    time.innerHTML=d.toLocaleTimeString();
    date.innerHTML=d.toLocaleDateString();
}
setInterval(changetime,1000);