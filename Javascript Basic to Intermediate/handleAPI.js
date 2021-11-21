fetch('https://reqres.in/api/users')
    .then((response)=>{return (response.json())})
    .then((d)=>{
        console.log(d.data[0]);
    })
