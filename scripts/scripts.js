// fname = "dog";

// function greet(fname, time = "day, ") {
//   console.log("good " + time + fname);
// }

// greet(fname);
// greet(fname, "evening, ");

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

// const RadiusPara = document.querySelector("#radius");
// const ResultPara = document.querySelector("#result");

// let RadiusInput = prompt(`enter radius of circle`);
// RadiusPara.textContent = RadiusInput;

// function CircleArea() {
//   if (isNaN(radius)) {
//     ResultPara.textContent = "Error: invalid input";
//   } else {
//     const area = Math.PI * radius ** 2;
//     return area;
//   }
// }

// let result = CircleArea(RadiusInput);
// if (result != undefined) {
//   ResultPara.textContent = `area of a circle is ${result}`;
// }

// function populateList(shoppingList)
// {
// // 1. select & store a ref to ul -> querySelector
// const ulList = document.querySelector(".shopping");
// // 2. loop through shopping list -> for loop
// for (let item of shoppingList);
// //      3. create li -> createElement
//     const newLi = document.createElement('li');
// //      4. append li to ul -> parent.appendChild(child)
//     ulList.appendChild(newLi);
// //      5. update textContent of li with array item
//     newLi.textContent = item;
// }

// let myList = ['bread', 'cheese', 'green pepper']
// populateList(myList);

function populateList(shoppingList){
    //1.select and store a ref to the ul -> querySelector
    const listText = document.querySelector(".shopping");
    //2.loop through the shopping list 
    for (let item of shoppingList){
    //for (let i = 0; 1 <shoppingList.length; i++) {
        //  3. createElement(li)
        const listed_item = document.createElement("li");
    //  4. append the li to the ul -> parent.appendChild()
        listText.appendChild(listed_item);
    //  5. update the text content of the li with array item
        listed_item.textContent = item;
    }

}
let myList = ['bread','cheese','green pepper']
populateList(myList);