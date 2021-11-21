const one=()=>{
    return "one";
}
const two=()=>{
    return "two";
}
const three= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("timeout");
        },3000);
    })

    
}


const callFunctions = async ()=>{

    var a = one();
    console.log(a);

    var c = await three();
    console.log(c);
    
    var b = two();
    console.log(b);
}

callFunctions();
