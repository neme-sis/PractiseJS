var taskRole="Root";

switch(taskRole){
    case "Root":
        {
            return console.log("You got the admin access");
        }
    case "IAM":
        {   
            return console.log("You got the access given by your admin"); 
        }
    default:
        {
            console.log("You are a trial user");
        }
}