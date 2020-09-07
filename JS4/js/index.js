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
const addBtn = document.querySelector('.btn');
const fieldName = document.querySelector('input:nth-of-type(1)');
const fieldDescription = document.querySelector('input:nth-of-type(2)');
const fieldInfo1 = document.querySelector('input:nth-of-type(3)');
const fieldInfo2 = document.querySelector('input:nth-of-type(4)');


const fields = document.querySelectorAll('input[type=text]')

/*Не смог придумать ничего умнее.
Иначе последний id у массива тоже менялся из-за наследования*/

const addData = e => {
	e.preventDefault();
	if(!fieldName.value || !fieldDescription.value || !fieldInfo1.value || !fieldInfo2.value){
	    alert("Заполните все поля!")
	    return false
    }

    const idNumber = document.querySelector('table tr:last-child td:nth-of-type(1)')
	const newObj = {id: parseInt(idNumber.textContent) + 1}
    for(let i = 0; i < fields.length; i++){
        newObj[fields[i].name] = fields[i].value
    }
    arr.push(newObj);
    basicData(arr.slice(-1));

    for(let i = 0; i < fields.length; i++){
        fields[i].value = '';
    }
}
addBtn.addEventListener("click", addData)

//Сортировка
const sortId = document.querySelector('.id');
const sortName = document.querySelector('.name');
const sortDescription = document.querySelector('.description');
const sortInfo1 = document.querySelector('.info1');
const sortInfo2 = document.querySelector('.info2');
const sortById = () => {
	arr.sort((a, b) => a.id > b.id ? 1 : -1);
}
const sortByName = () => {
	arr.sort((a, b) => a.name > b.name ? 1 : -1);
	
}
const sortByDescription = () => {
	arr.sort((a, b) => a.description > b.description ? 1 : -1);
}
const sortByInfo1 = () => {
	arr.sort((a, b) => a.info1 > b.info1 ? 1 : -1);
}
const sortByInfo2 = () => {
	arr.sort((a, b) => a.info2 > b.info2 ? 1 : -1);
}
sortId.addEventListener("click", sortById);
sortName.addEventListener("click", sortByName);
sortDescription.addEventListener("click", sortByDescription);
sortInfo1.addEventListener("click", sortByInfo1);
sortInfo2.addEventListener("click", sortByInfo2);

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