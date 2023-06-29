//probably sjhlould be added to main js doc
"use strict"

console.log("this is only continuation of clicking game");

function renderChart(){
    const goatNames = []
    const goatViews = []
    const goatClicks = [];

    for(let i =  0; i < allGoats.length; i++){
        goatNames.push(allGoats[i].name);
        goatViews.push(allGoats[i].views);
        goatClicks.push(allGoats[i].clicks);
    }

    console.log[goatNames];
    console.log[goatViews];
    console.log[goatClicks];


// const data = {

// }

// const  config = {

// }
const goatCahry = document.getElementsByClassName("chart");
}

renderChart();
// missing staff

const data = {
    labels: goatNames,
    datasets: [
        {
            lablel:"Views",
            data: goatViews,
            backgroundColour: ["#"],
            borderColor: ["#"],
            borderWidth: 1,


        }
    ]
};

const config = {
    type: "bar",
    data: data,
    const goatChart = document.getElementById("chart");
    const myChart = new Chart()
}

// check both codes  - goat.js and chart.js with Chris's code