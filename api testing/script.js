let getbutton=document.getElementById("get");
let deletebutton=document.getElementById("delete");
let putbutton=document.getElementById("put");
let push=document.getElementById("post");


let row1=document.getElementById("row-1");

let url="https://jsonplaceholder.typicode.com/posts";

console.log(url);

let getpost=async ()=>{
let response= await fetch(url);
let posts=await response.json();

return posts;
};

/*
getbutton.addEventListener("click",
 async ()=>{
    let posts=await getpost();
    console.log(posts);

    posts.forEach(data => {
        let newrow=document.createElement("tr");
        newrow.insertAdjacentHTML(
            "beforeend",


            `<td>${data["userId"]} </td>
            <td>${data["id"]} </td>
            <td>${data["title"]} </td>
             <td>${data["body"]} </td>`


        );
        row1.appendChild(newrow);
    }); 
    }
);

*/

getbutton.addEventListener("click", async () => {
    let posts = await getpost();
    console.log(posts);
  
    posts.forEach((data) => {
      let newrow = document.createElement("tr");
      newrow.insertAdjacentHTML(
        "beforeend",
        `
          <td>${data["userId"]}</td>
          <td>${data["id"]}</td>
          <td>${data["title"]}</td>
          <td>${data["body"]}</td>
        `
      );
      document.querySelector('tbody').appendChild(newrow);
    });
  });