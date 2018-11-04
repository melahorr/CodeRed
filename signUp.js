//dynamically add to student's course list
//okay so apparently you can't just fucking enter the fucking id name so whatever fuck javascript
let times = 0;

function addItem(listName)
{
	var li = document.createElement("LI");  
	var input = document.getElementById("add");
	li.innerHTML = input.value;
	input.value = "";

	document.getElementById(listName).appendChild(li);
}

function addItemCourseHistory()
{
	var li = document.createElement("LI");  
	var input = document.getElementById("addCH");
	li.innerHTML = input.value;
	input.value = "";

	document.getElementById("courseHistoryList").appendChild(li);
}

function addItemWeakness()
{
	var li = document.createElement("LI");  
	var input = document.getElementById("addW");
	li.innerHTML = input.value;
	input.value = "";

	document.getElementById("weaknessList").appendChild(li);
}

$(".deleteMe").on("click", function()
{
	$(this).closest("li").remove();
});