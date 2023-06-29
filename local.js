"use strict"

console.log("Whatever happens");


let darkMode = false;

//let mode = document.getElementsByClassName("mode")
//let details = document.getElementsByTagName("details")

document.getElementById("darkButton").addEventListener("click", enterDarkMode);
document.getElementById("lightButton").addEventListener("click", enterLightkMode);

//fubnction delcarations are hoisted
//function expressions are not hoisted
function enterDarkMode(){
    let body = document.body;
    let welcome = document.getElementById("welcome");
    let button = document.getElementById("darkButton");
    body.classList.remove("light");
    welcome.classList.remove("light");
    body.classList.add("dark");
    welcome.classList.add("dark");
    button.setAttribute("checked", "checked");
    //local storage
    darkMode = true;
    console.log(darkMode);
    saveMode();
}

function enterLightMode(){
    let body = document.body;
    let welcome = document.getElementById("welcome");
    let button = document.getElementById("lightButton");
    body.classList.remove("dark");
    welcome.classList.remove("dark");
    body.classList.add("light");
    welcome.classList.add("light");
    button.setAttribute("checked", "checked");
    //local storage
    darkMode = false;
    console.log(darkMode);
    saveMode();
}

// local storage stores only strings
function saveMode () {
    let mode = JSON.stringify(darkMode);
    localStorage.setItem("darkMode", mode);
}

function pageLoad(){
    let storedMode = JSON.parse(localStorage.getItem("darkMode"));
    // console.log(typeof storeMode)

    if(storedMode === null){
        console.log("null");
        return;
    } else if (storedMode === false) {
        console.log("light");
        enterLightMode();
    } else if (storedMode === true) {
        console.log("true");
        enterDarkMode();
    }
}

pageLoad();

//localStorage.clear();

//local storage is browser specific