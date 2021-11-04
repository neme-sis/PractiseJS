var cloud=function(role){
    switch(role)
    {
        case "Root":
            {
                return "you have full access";
            }
        case "IAM":
            {
                return "you have access given by admin";
            }
        case "Trial":
            {
                return "you are a trial user";
            }
        default:
            {
                return "you don't have access";
            }
    };
}

var name="gairik";
var role="Root";
var task=cloud(role);
// console.log(cloud(role));
console.log(`Name: ${name}
Role: ${role}
${task}
`);
