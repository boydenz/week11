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

function CircleArea(radius){
    if (isNaN(radius)) {
        alert("not a number, try again");
    return;
    }
    const area = Math.PI * radius ** 2;
    alert(`the area of the circle with radius ${radius} is ${area.toFixed(2)}`);
    return area;
}

let RadiusInput = prompt(`enter radius of circle`)
CircleArea(RadiusInput)

