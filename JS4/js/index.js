let arr;

fetch('https://gist.githubusercontent.com/Greyewi/9929061c594ef7a689d21e5c72c96f3b/raw/9bbd165457d19c5f260e88287a66ffc21b0f0edf/initial_Table.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        arr = data;
        basicData(arr)
    });

//Переменные
const addBtn = document.querySelector('.btn');
const fieldName = document.querySelector('input:nth-of-type(1)');
const fieldDescription = document.querySelector('input:nth-of-type(2)');
const fieldInfo1 = document.querySelector('input:nth-of-type(3)');
const fieldInfo2 = document.querySelector('input:nth-of-type(4)');
const fields = document.querySelectorAll('.add input[type=text]');
const AllTh = document.querySelectorAll('th');

const findFromTable = document.querySelector('.find');




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

//Поиск

/*findFromTable.addEventListener("input",() => {
    const sortArr = [];
    const AllTd = document.querySelectorAll('td');
    for(let i = 1; j < table.rows.length; i++){
        for(let j = table.rows[j].cells.length - 1; j >= 0; j--){

        }
    }
    basicData(sortArr)
}
)
*/

//Честно украдено :-(
function tableSearch() {
    let phrase = document.querySelector('.find');
    let table = document.querySelector('.info-table');
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}



//Событие добавление строки 
addBtn.addEventListener("click", addData)
//События сортировки
const sortByIncreace = () => {
    for(let i = 0; i < AllTh.length - 1; i++){
        AllTh[i].querySelector(".increase").addEventListener("click",() => sortIncrease(AllTh[i], AllTh.i));
    }
}

const sortByDegrease = () => {
    for(let i = 0; i < AllTh.length - 1; i++){
        AllTh[i].querySelector(".degrease").addEventListener("click", () => sortIncrease(AllTh[i], AllTh.i));
    }
}
sortByIncreace();
sortByDegrease();

//Событие поиска
findFromTable.addEventListener("keyup",tableSearch)


/*
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

*/

