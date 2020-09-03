let arr = [
	{id: 1, name: "Anya", description: "description", info1: "info", info2: "info"},
	{id: 2, name: "Petya", description: "description", info1: "info", info2: "info"},
	{id: 3, name: "Stepan", description: "description", info1: "info", info2: "info"},
	{id: 4, name: "Vova", description: "description", info1: "info", info2: "info"}
]

let tableBoard = document.querySelector('table');

let basicData = (ars) => {
	for(i = 0; i < ars.length; i++) {
		let newRow = document.createElement('tr');
		let newTableRow = tableBoard.append(newRow);
		for(key in ars[i]) {
			let newTD = document.createElement('td');
			let newRowTD = newRow.append(newTD);
			newTD.textContent = ars[i][key];
		}
		let newTDBtn = document.createElement('td');
		let newRowTDBtn = newRow.append(newTDBtn);
		let newBtn = document.createElement('input');
		newBtn.type = "checkbox";
		let addBtnInTD = newTDBtn.append(newBtn);
	}
}
basicData(arr)

let addBtn = document.querySelector('.btn');
let firstField = document.querySelector('input:nth-of-type(1)');
let secondField = document.querySelector('input:nth-of-type(2)');
let thirdField = document.querySelector('input:nth-of-type(3)');
let fourthField = document.querySelector('input:nth-of-type(4)');
let idNumber = document.querySelector('table tr:last-child td:nth-of-type(1)')
let newArr = [];
/*Не смог придумать ничего умнее.
Иначе последний id у массива тоже менялся из-за наследования*/
let obj = {id: idNumber.textContent}; 


addBtn.onclick = (e) => {
	e.preventDefault();
	newArr = [{id: ++obj.id, name: firstField.value, description: secondField.value, info1: thirdField.value, info2: fourthField.value}];
	basicData(newArr);
	firstField.value = '';
	secondField.value = '';
	firstField.value = '';
	thirdField.value = '';
	fourthField.value = '';
}

//time 4ч



/* На всякий случай

let BasicData = (ars) => {
	for(i = 0; i < ars.length; i++) {
		let newRow = document.createElement('tr');
		let newTableRow = tableBoard.append(newRow);
		
		let newTDId = document.createElement('td');
		let newRowTDId = newRow.append(newTDId);
		newTDId.textContent = arr[i]["id"];
		let newTDName = document.createElement('td');
		let newRowTDName = newRow.append(newTDName);
		newTDName.textContent = arr[i]["name"];
		let newTDDesc = document.createElement('td');
		let newRowTDDesc = newRow.append(newTDDesc);
		newTDDesc.textContent = arr[i]["description"];
		let newTDInf1 = document.createElement('td');
		let newRowTDInf1 = newRow.append(newTDInf1);
		newTDInf1.textContent = arr[i]["info1"];
		let newTDInf2 = document.createElement('td');
		let newRowTDInf2 = newRow.append(newTDInf2);
		newTDInf2.textContent = arr[i]["info2"];
		let newTDBtn = document.createElement('td');
		let newRowTDBtn = newRow.append(newTDBtn);
		let newBtn = document.createElement('input');
		newBtn.type = "checkbox";
		let addBtnInTD = newTDBtn.append(newBtn);
		

	}
}

BasicData(arr)
*/