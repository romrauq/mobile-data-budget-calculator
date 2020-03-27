//Test for script's connection to index:
// alert("Script connected!");

let dataBundle = prompt ("Please enter how much data you bundle for a month");
let dailyData = prompt("How much data do you use in a day?");

// // let month = [Jan="31",
// // 			Feb="28",
// // 			Mar="31",
// // 			Apr="30",
// // 			May="31",
// // 			Jun="30",
// // 			Jul="31",
// // 			Aug="31",
// // 			Sep="30",
// // 			Oct="31",
// // 			Nov="30",
// // 			Dec="31"];
let day = 1;
function calculateData()
{
	// for (i=0; i<=month[]; i++)
	for(i=0; i<=30; i++)
	{
		document.write("<b>Day " + day +"</b>"+ ": " + dataBundle + " Megabytes of data remaining.");
		document.write("<br>");
		dataBundle = dataBundle - dailyData;
		day += 1;
	}

}

calculateData();