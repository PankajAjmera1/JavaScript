//  Create an application with the following roles:
//    admin - gets full access
//    subadmin - gets access to create/delete courses
//    testprep - gets access to create/delete tests
//    user - gets access to consume content
var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You gets access to create/delete courses");
        break;
    case "testprep":
        console.log("You gets access to create/delete tests");
        break;
        case "user":
        console.log("Yougets access to consume content");
        break;


    default:
        console.log("Trial User")
        break;
}