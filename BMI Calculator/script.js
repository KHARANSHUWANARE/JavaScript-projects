let form=document.querySelector('form');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let result=(document.querySelector("#results"));

    if(height==='' || height < 0 || isNaN(height))
    {
        let x="Please give valid height"+height;
        result.innerHTML=x;
    }
    else if(weight==='' || weight < 0 || isNaN(weight))
    {
        let x="Please give valid weight"+weight;
        result.innerHTML=x;
    }
    else{
        const ratio=(weight/((height*height)/10000)).toFixed(2);
        let x="<span> "+ ratio + "</span>";
        result.innerHTML=x;
    }
})