//add .value behind the collected html elements

const newUser = document.getElementById("#textUsername").value;
const newPass = document.getElementById("#textPassword");
const inputForm = document.getElementById("#inputForm");
const outputP = document.getElementById("#p");
const button = document.querySelector(".submitButton");

let username =  [];
let password = [];

//function to collect the info and post it one the web page
function submit() {
    let newUser = document.querySelector("#textUsername").value;
    let newPass = document.querySelector("#textPassword").value;

        username = inputUsername.concat("#textUsername");
        password = inputPassword.concat("#textPassword");

        outputP = outputP.createElement("#p");
        outputP.appendChild(submit);

    // if (inputUsername) {
    //     const outputP = document.createElement("p");

    //     outputP.textContent = inputUsername.value;
    //     outputP.textContent = inputPassword.value;
    //     outputP.appendChild(inputUsername);

    // } else {
    //     alert("Please enter username and password");
    // }

    // inputForm.addEventListener("click");
}

button.addEventListener("click", submit);