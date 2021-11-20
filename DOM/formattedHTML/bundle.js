var courseDetails = [
    {
        name: "Express.js",
        price: 1750
    },
    {
        name: "React Js",
        price: 1500
    },
    {
        name: "Next Js",
        price: 7000
    },
     {
         name:"GO",
         price: 2000
     },
    // {
    //     name:"",
    //     price:
    // }
];

function getList(){

    var ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML="";

    courseDetails.forEach((course)=>{
    var li = document.createElement("li");
    li.classList.add("item");

    var name = document.createTextNode(course.name);
    li.appendChild(name);

    var span= document.createElement("span");
    span.classList.add("right");

    var price= document.createTextNode(course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
    });
}

window.addEventListener("load" , getList);

var btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    courseDetails.sort((a,b)=>(a.price-b.price));
    getList();
})