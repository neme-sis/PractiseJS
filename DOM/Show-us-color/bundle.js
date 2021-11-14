var red= document.getElementsByClassName("red")[0];
var pink= document.getElementsByClassName("pink")[0];
var green= document.getElementsByClassName("green")[0];
var yellow= document.getElementsByClassName("yellow")[0];
var blue= document.getElementsByClassName("blue")[0];

var showColor= document.getElementsByClassName("show-color")[0];

// var color=window.getComputedStyle(red).backgroundColor;

// showColor.style.background = color;

// var getColor = (colorDiv)=>{
//     return window.getComputedStyle(colorDiv).backgroundColor;
// }

// var showColorInMain = (colorDiv, divBGColor)=>{
//     // for each colorDiv, divBGColor= getColor(colorDiv)
//     return colorDiv.addEventListener("mouseenter",()=>{
//         showColor.style.background = divBGColor;
//     })
// }   

// showColorInMain(red,getColor(red));
// showColorInMain(blue,getColor(blue));
// showColorInMain(pink,getColor(pink));
// showColorInMain(yellow,getColor(yellow));
// showColorInMain(green,getColor(green));

var showColorInMain = (colorDiv)=>{
    return colorDiv.addEventListener("mouseenter",()=>{
        showColor.style.background = window.getComputedStyle(colorDiv).backgroundColor;
    });
}

showColorInMain(red);
showColorInMain(blue);
showColorInMain(pink);
showColorInMain(yellow);
showColorInMain(green);