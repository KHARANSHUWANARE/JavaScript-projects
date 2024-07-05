const btn=document.getElementById("btn");

function getjoke()
{
    fetch("./index.json")
    .then((response)=>{
        return response.json();
    })
    .then(
        (data)=>{
            let row="";
            let key=Math.floor(Math.random()*406);
               row=row+`<br>type :${data[key]["type"]}<br>
              joke: <br>${data[key]["setup"]} <br>
              Punchline: <br>${data[key]["punchline"]} <br>`;
              let joke= document.getElementById("joke");
              document.getElementById("joke").innerHTML=row;
     
        }
    )
    .catch(
        (error)=>{
    console.log("error found inside code"+error);
        }
    );    
}
btn.addEventListener('click',getjoke);




// let school = {
//     name: 'Vivekananda School',
//     location: 'Delhi',
//     established: '1971',
//     20: 1000,
//     displayInfo: function () {
//         console.log(`The value of the key 20 is ${school[20]}`);
//     }
// }
// school.displayInfo();   
