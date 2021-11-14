var interval = document.getElementById("min");
var interval2 = document.getElementById("sec");
var notice= document.getElementsByClassName("countertext")[0];

var ct=0, ct2=0;

setInterval(()=>{
    if(ct<60){
        ct2=(ct2+1)%60;
    }
    if(ct2===0 && ct<60){
        ct++;
    }
    interval.innerText = ct;
    interval2.innerText=ct2;
}, 1000)

setTimeout(()=>{
    notice.innerHTML = "You have spent more than 1 hour in our website";
}, (60*60*1000))