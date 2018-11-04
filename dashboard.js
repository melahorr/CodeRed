let iterator = 0;
let listOfPeople = {};

let personOne = {
					name:"First Match",
					age:18,
					classification:"Freshman"
				};
let personTwo = {
					name:"Second Match",
					age:19,
					classification:"Sophomore"
				};
let personThree = {
					name:"Third Match",
					age:20,
					classification:"Junior"
				};
let personFour = {
					name:"Fourth Match",
					age:21,
					classification:"Senior"
				};
let personFive = {
					name:"Fifth Match",
					age:22,
					classification:"Graduate"
				};
				
listOfPeople.push(personOne);
listOfPeople.push(personTwo);
listOfPeople.push(personThree);
listOfPeople.push(personFour);
listOfPeople.push(personFive);

function createTable()
{
	let tableData = listOfPeople;
	var table = document.createElement('table');
	var tableBody = document.createElement('tbody');

	tableData.forEach(function(rowData)
	{
		var row = document.createElement('tr');

		rowData.forEach(function(cellData)
		{
			var cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});

		tableBody.appendChild(row);
	});

	table.appendChild(tableBody);
	document.body.appendChild(table);
}