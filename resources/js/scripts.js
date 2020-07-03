const input = document.getElementById("input");
input.setAttribute("placeholder", 0); //I'm Simply testing the setAttribute() method.

const selectedMonth = document.querySelector("");
const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //days of each month of the year.
// let month = monthsArray[];
const button = document.getElementById("submit-btn");
const output = document.getElementById("result-output");

button.addEventListener("click", calculateBudget);

//Test logs:
// console.log(month[0]);
// console.log(input.value);
console.log(selectedMonth);

function calculateBudget() {
	let dataPerDay = input.value / month;
	return dataPerDay;
}
console.log(calculateBudget());
// function outputResult() {}
