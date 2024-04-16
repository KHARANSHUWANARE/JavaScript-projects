let buttons = document.querySelectorAll(".button");
let body=document.querySelector("body");
buttons.forEach(
    function (button) {
        button.addEventListener('click',(e)=>{
            console.log(e);
            console.log(e.target);
            let ele=e.target;
            let color=ele.getAttribute("id");
            console.log(color);
            body.style.backgroundColor=color;
        })
    }
);

