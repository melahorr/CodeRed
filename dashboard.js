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

function addNextPerson()
{
	let elem = document.createElement("ELEMENT");
	elem.innerHTML = listOfPeople[iterator].name;
	document.getElementByClass("column").appendChild(elem);
}