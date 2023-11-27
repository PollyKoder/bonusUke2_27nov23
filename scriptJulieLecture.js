

function submitTaskFive() {
    let taskFiveInput = document.querySelector("#taskFiveInput").value;
    console.log(taskFiveInput);

    let taskFiveP = document.querySelector("#taskFiveP");
    taskFiveP.textContent= taskFiveInput;
}

 let taskFiveButton = document.querySelector("#taskFiveButton");
 taskFiveButton.addEventListener("click", submitTaskFive);

// taskFiveButton.addEventListener("click", () => {
//     function submitTaskFive() {
//         let taskFiveInput = document.querySelector("#taskFiveInput").value;
//         console.log(taskFiveInput);
    
//         let taskFiveP = document.querySelector("#taskFiveP");
//         taskFiveP.textContent= taskFiveInput;
//     }
// });

//This works, now make your own work!