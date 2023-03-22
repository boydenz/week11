fname = "dog"

function greet (fname, time = "day, ") {
    console.log('good ' + time + fname)
}

greet(fname)
greet (fname, "evening, ")

// let input = prompt("what is your name")
// greet (input)

// const greet = function (fname)
// {
//     console.log (`hello ${fname}`);
// }
// greet ("dog");

// const greet = (fname) => 
// {
// console.log (`hello ${dog}`)
// }

const RadiusPara = document.querySelector("#radius")
const ResultPara = document.querySelector("#result")


function CircleArea(){
    const radiusInput = document.getElementById('radius');
    const resultOutput = document.getElementById('result');
    
    if (isNaN(radius)) {
        resultOutput.textContent = 'Error: invalid input';
    }
    else{
        const area = Math.PI * radius ** 2;
        resultOutput.textContent = `The area is ${area.toFixed(2)}`;
    }
    const area = Math.PI * radius ** 2;
    resultOutput.textContent = `the area of the circle with radius ${radius} is ${area.toFixed(2)}`;
}

let RadiusInput = prompt(`enter radius of circle`)
CircleArea(RadiusInput)