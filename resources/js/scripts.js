const dataAmount = document.getElementById("input");
//Assigning a placeholder numerical value of "0" to the number input HTML element.
dataAmount.setAttribute("placeholder", 0);

let monthSelect = document.getElementById("month-select");

const button = document.getElementById("calculate-btn");
const output = document.getElementById("result-output");

//(Below) An event listener to listen for the calculate button click to run calculateBudget() function.
button.addEventListener("click", calculateBudget);

//Test logs:
// console.log(month[0]);
// console.log(dataAmount.value);
// console.log(monthSelect);

function calculateBudget(e) {
	e.preventDefault(); //Prevents the default action of the submit button.
	const monthDaysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	//(Above) An array containing the days of each month respectively in ascending order.
	let selectedMonth = monthSelect.options[monthSelect.selectedIndex].value;
	// (Above) returns the value (a number) associated to the month selected.
	let month = monthDaysArray[selectedMonth];
	//(Below) Passed the selected month's value (a number) to assign the selected month's days to the variable month.

	if (
		dataAmount.value == "" &&
		selectedMonth === "#" &&
		dataAmount.value == 0
	) {
		console.log("Please enter your data amount and select a month");
	} else if (selectedMonth === "#") {
		console.log("Please select the month you wish to budget for");
	} else if (dataAmount.value == "" || dataAmount.value == 0) {
		console.log("Please enter your data amount");
	} else {
		let result = dataAmount.value / month;
		let resultOutput = result.toFixed(2); //Rounds the returned number result to two decimal places

		output.innerHTML = `<b>${resultOutput}</b> Megabytes`;

		//Test logs:
		// console.log("data amount: " + dataAmount.value);
		// console.log("month's days: " + month);
		// console.log("Data per day: " + dataPerDay + "MB");
	}
}
