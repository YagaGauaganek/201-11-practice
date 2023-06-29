"use strict"

console.log("messi is the GOAT")

//global variables
//quesrySelector returs the first elemnt in the document that matches
const goatContainer = document.querySelector("section")
const resultButton = document.querySelector("section + div")
//console.log(resultButton);
const image1 = document.querySelector("sectionimg:first-child")
const image2 = document.querySelector("sectionimg:nth-child(2)")

let clicks = 0;
let maxClicksAllowed = 9;

let allGoats = [];

function getRandomNumber(){
    return Math.floor (Math.random() * allGoats.length);
}

function Goat(name){
    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.view = 0;
    allGoats.push(this);
}

function renderGoats(){
        //we need to generate a number to referance the goar we want to render onto page 
        let goat1 = getRandomNumber();
        let goat2 = getRandomNumber();

        //how to prevent goat1 being the same number as goat2 - we add while loop
        while (goat1 === goat2){
            goat2 = getRandomNumber();
        }
// now we have to set attributes of our imgs in the document
image1.src = allGoats[goat1].scr;
image2.src = allGoats[goat2].scr;
image1.alt = allGoats[goat1].name;
image2.alt = allGoats[goat2].name;
allGoats[goat1].views++;
allGoats[goat2].view++;
//console.log(allGoats[goat1])
}

function handleGoatClick(){
    //console.log("You are in the click") 
    if(event.target === goatContainer){
        alert("please click on the image");
    } else {
        clicks++;
        //console.log(clicks);
    let clickedGoats = event.target.alt;
    for (let i= 0; i < allGoats.length; i++){
    if(clickedGoats === allGoats[i].name){
        allGoats[i].clicks++;
        break;
        }
    }
    if (clicks === maxClicksAllowed){
        goatContainer.removeEventListener("click", handleGoatClick);
        goatContainer.className = "no-voting";
        resultButton.addEventListener("click", renderResults);
        resultButton.className = "click-allowed"
    } else {
        renderGoats();
        }       
    }
}

function redenerResults () {
    //console. log("your results are in");
    let ul = document.querySelector("ul");
    for(let i = 0; i < allGoats.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${allGoats[i.name]} had ${allGoats[i]views} views and was clicked ${allGoats[i].clicks} times.`;
        ul.appendChild(li);
        
    }
}
const cruising = new Goat ("cruising goat", "assets/images/cruising-got.jpg");
const float = new Goat("Float Your Goat", "assets/images/float-your-goat.jpg");
const hand = new Goat("Goat Out of Hand", "assets/images/goat-out-of-hand.jpg");
const kissing = new Goat("Kissing Goat", "assets/images/kissing-goat.jpg");
const sassy = new Goat("Sassy Goat", "assets/images/sassy-goat.jpg");
const smiling = new Goat("Smiling Goat", "assets/images/smiling-goat.jpg");
const sweater = new Goat("Sweater Goat", "assets/images/sweater-goat.jpg");
const away = new Goat("Goat Away", "assets/images/goat-away.jpg");
//add all image instanced (of a hoat in this case)

renderGoats();

goatContainer.addEventListener("click", handleGoatClick);

function renderChart() {
    const goatNames = [];
    const goatVievs = [];
    const goatClicks = [];

    for(let i = 0; i < allGoats.length; i+) {
        goatNames.push(allGoats[i].name);
        goatViews.push(allGoats[i].views);
        goatClicks.push(allGoats[i].clicks);

    }
    // console.log(goatNames);
    // console.log(goatViews);
    // console.log(goatClicks);

    const data = {
        labels: goatNames,
        datasets: [
            {
                label: "clicks",
                data: goatClicks,
                backgroundColor: ["#42032C"],
                borderColor: ["#D36B00"],
                borderWidth: 1,
            }
            {
                label: "views",
                data: goatViews,
                backgroundColor: ["#D36B00"],
                borderColor: ["#42032C"],
                borderWidth: 1,
            },
        ],
    };

    const config = {
        type: "bar",
        data: data,
    };

    const goatChart = document.getElementById("char");
    const myChart = new Chart(goatChart, config);
}