const arr = [
	{id: 1, name: "Anya", description: "description", info1: "info", info2: "info"},
	{id: 2, name: "Petya", description: "description", info1: "info", info2: "info"},
	{id: 3, name: "Stepan", description: "description", info1: "info", info2: "info"},
	{id: 4, name: "Vova", description: "description", info1: "info", info2: "info"}
]

//Переменные
const addBtn = document.querySelector('.btn');
const fieldName = document.querySelector('input:nth-of-type(1)');
const fieldDescription = document.querySelector('input:nth-of-type(2)');
const fieldInfo1 = document.querySelector('input:nth-of-type(3)');
const fieldInfo2 = document.querySelector('input:nth-of-type(4)');
const fields = document.querySelectorAll('input[type=text]')
const sortId = document.querySelector('.id');
const sortName = document.querySelector('.name');
const sortDescription = document.querySelector('.description');
const sortInfo1 = document.querySelector('.info1');
const sortInfo2 = document.querySelector('.info2');

//Добавление Чекбокса
const addCheckbox = newRow => {
    const newTDBtn = document.createElement('td');
    newRow.append(newTDBtn);
    const newBtn = document.createElement('input');
    newBtn.type = "checkbox";
    newTDBtn.append(newBtn);
}

//Заполение таблицы из массива
const basicData = ars => {
	const newTbody = document.querySelector('tbody')
    const TRS = newTbody.querySelectorAll("tr")

    for(let trI = 0; trI < TRS.length; trI++){
        TRS && TRS.length > 0 && TRS[trI].remove()
    }

    ars && ars.length && ars.map((item) => {
        const newRow = document.createElement('tr');
        newTbody.append(newRow);
        for(let key in item) {
            const newTD = document.createElement('td');
            newRow.append(newTD);
            newTD.textContent = item[key];
        }
        addCheckbox(newRow)
    })
}

basicData(arr)


//Добавление новой строки в таблицу
const addData = e => {
	e.preventDefault();
	if(!fieldName.value || !fieldDescription.value || !fieldInfo1.value || !fieldInfo2.value){
	    alert("Заполните все поля!")
	    return false
    }

    const idNumber = document.querySelector('table tr:last-child td:nth-of-type(1)') // TODO Бери данные из arr
	const newObj = {id: parseInt(idNumber.textContent) + 1}
    for(let i = 0; i < fields.length; i++){
        newObj[fields[i].name] = fields[i].value
    }
    arr.push(newObj);
    basicData(arr);

    for(let i = 0; i < fields.length; i++){
        fields[i].value = '';
    }
}


//Сортировка

const sortIncrease = (field, fieldName) => {
	arr.sort((a, b) => a[fieldName] > b[fieldName] ? 1 : -1);
    basicData(arr);
    field.querySelector(".increase").style.display = "none"
    field.querySelector(".degrease").style.display = "inline"
}

const sortDegrease = (field, fieldName) => {
    arr.sort((a, b) => a[fieldName] > b[fieldName] ? -1 : 1);
    basicData(arr);
    field.querySelector(".increase").style.display = "inline"
    field.querySelector(".degrease").style.display = "none"
}

//Событие добавление строки 
addBtn.addEventListener("click", addData)
//События сортировки
sortId.querySelector(".increase").addEventListener("click", () => sortIncrease(sortId, 'id'));
sortId.querySelector(".degrease").addEventListener("click", () => sortDegrease(sortId, 'id'));
sortName.querySelector(".increase").addEventListener("click", () => sortIncrease(sortName, 'name'));
sortName.querySelector(".degrease").addEventListener("click", () => sortDegrease(sortName, 'name'));
sortDescription.querySelector(".increase").addEventListener("click", () => sortIncrease(sortDescription, 'description'));
sortDescription.querySelector(".degrease").addEventListener("click", () => sortDegrease(sortDescription, 'description'));
sortInfo1.querySelector(".increase").addEventListener("click", () => sortIncrease(sortInfo1, 'info1'));
sortInfo1.querySelector(".degrease").addEventListener("click", () => sortDegrease(sortInfo1, 'info1'));
sortInfo2.querySelector(".increase").addEventListener("click", () => sortIncrease(sortInfo2, 'info2'));
sortInfo2.querySelector(".degrease").addEventListener("click", () => sortDegrease(sortInfo2, 'info2'));



//time 4ч
