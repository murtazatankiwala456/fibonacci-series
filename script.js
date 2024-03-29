const input = document.querySelector("#input");
const btn = document.querySelector(".btn"); // grap dom objects into variable
const result = document.querySelector("#result");

btn.addEventListener("click", generateFibonacciSeries); // add eventListner to button calling a function

function generateFibonacciSeries() {
  const inputValue = input.value; // grab input value in variable
  if (inputValue === "") {
    // put condition if input is empty than popup alert
    result.innerHTML = `<div class = 'alert alert-danger'>Enter a number</div>`;
  } else {
    const fibonacciSeries = [0, 1]; //start series with 0 and 1
    for (let i = 2; i < inputValue; i++) {
      //initialize series with 2 to the number which is added to input field, first number will be 0,1,
      fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]); // add last and second last number and push it into array
    }
    result.innerHTML = `<h2>${fibonacciSeries}</h2>`; //display result in h2
  }
}
