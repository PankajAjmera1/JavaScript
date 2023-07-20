// Show a user signout button if he is athenticated,
// otherwise show him option to Login/Signup

// Ist way
var authenticated = true;

// if(authenticated)
// {
//     console.log("Show signout button");

// }
// else{
//     console.log("Show sign/sign up button");
// }


// 2nd way
authenticated ? console.log("Show Signout button") : console.log("Login");