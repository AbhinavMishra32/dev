accounts = {
    "admin": "admin123",
    "Abhinav": "abhinav235",
    "Shubham": "shubham890",
    "Shivam": "shivam2u9"
}

// function validate() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (accounts[username] == password) {
//         window.location = "index.html";
//         return false;
//     } else {
//         alert("Login failed. Please try again.");
//     }
// }


function validate(){
    let username = document.querySelector(".username-field").value;
    let password = document.querySelector(".password-field").value;

    if(accounts[username] == password){
        alert("logged in"); 
        window.location = "login-accepted.html";
    }
    else{
        alert("wrong username or password");
    }
    document.querySelector(".password-field").value = "";
}

