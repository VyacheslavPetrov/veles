const arr = [
	{id: 1, name: "Anya", description: "description", info1: "info", info2: "info"},
	{id: 2, name: "Petya", description: "description", info1: "info", info2: "info"},
	{id: 3, name: "Stepan", description: "description", info1: "info", info2: "info"},
	{id: 4, name: "Vova", description: "description", info1: "info", info2: "info"}
]

const tableBoard = document.querySelector('table');

const addCheckbox = newRow => {
    const newTDBtn = document.createElement('td');
    newRow.append(newTDBtn);
    const newBtn = document.createElement('input');
    newBtn.type = "checkbox";
    newTDBtn.append(newBtn);
}

const basicData = ars => {
    ars && ars.length && ars.map((item) => {
        const newRow = document.createElement('tr');
        tableBoard.append(newRow);
        for(let key in item) {
            const newTD = document.createElement('td');
            newRow.append(newTD);
            newTD.textContent = item[key];
        }
        addCheckbox(newRow)
    })
}

basicData(arr)

/***
* TODO переименуй в осмысленные константы (const, вместо let), к примеру вместо firstField -> fieldName, а
*    вместо secondField -> fieldDescription
***/
let addBtn = document.querySelector('.btn');
let firstField = document.querySelector('input:nth-of-type(1)');
let secondField = document.querySelector('input:nth-of-type(2)');
let thirdField = document.querySelector('input:nth-of-type(3)');
let fourthField = document.querySelector('input:nth-of-type(4)');


const fields = document.querySelectorAll('input[type=text]')

/*Не смог придумать ничего умнее.
Иначе последний id у массива тоже менялся из-за наследования*/

const addData = e => {
	e.preventDefault();
	if(!firstField.value || !secondField.value || !thirdField.value || !fourthField.value){
	    alert("Заполните все поля!")
	    return false
    }

    const idNumber = document.querySelector('table tr:last-child td:nth-of-type(1)')
	const newObj = {id: parseInt(idNumber.textContent) + 1}
    for(let i = 0; i < fields.length; i++){
        newObj[fields[i].name] = fields[i].value
    }
    basicData([newObj]);

    for(let i = 0; i < fields.length; i++){
        fields[i].value = '';
    }
}

addBtn.addEventListener("click", addData)



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