var roleANDname = function(n, m) {
    var ans;
    switch (m) {
        case "root":
            {
                ans = "you got fullaccess.";
                break;
            }
        case "IAM":
            {
                ans = " you got access given by admin.";
                break;
            }
        case "trial":
            {
                ans = "you dont have access.";
                break;
            }
        default:
            {
                ans = "you are not a user.";
            }
    }
    return `
    your name ${n}
    so your role is ${m}
    your task is  ${ans}`;
}



var name = "sam";
var role = "root";

console.log(roleANDname(name, role));