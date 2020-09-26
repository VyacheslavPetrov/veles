let arr;

// fetch('https://gist.githubusercontent.com/Greyewi/9929061c594ef7a689d21e5c72c96f3b/raw/4fec16d39b4a30d4a467dd895a4d3084b6c9c64b/initial_Table.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         arr = data;
//         basicData(arr)
//     });


//Переменные
const addBtn = document.querySelector('.btn');
const fieldName = document.querySelector('input:nth-of-type(1)');
const fieldDescription = document.querySelector('input:nth-of-type(2)');
const fieldInfo1 = document.querySelector('input:nth-of-type(3)');
const fieldInfo2 = document.querySelector('input:nth-of-type(4)');
const fields = document.querySelectorAll('.add input[type=text]');
const AllTh = document.querySelectorAll('th');

const findFromTable = document.querySelector('.find');
const buttonDelete = document.querySelector('.del');
const buttonEdit = document.querySelector('.edit');

// Меняем поле checked с false на true + активация кнопки "Удалить"
const handleCheck = (arrayNumber) => {
    let numberChecks = 0;
    arr.map((item, key) => {
        if(key === arrayNumber) {
            item.isChecked = !item.isChecked
        }
        if(item.isChecked){
            numberChecks++;
        }
        if(numberChecks > 0){
            buttonDelete.disabled = false;
            buttonEdit.disabled = false;
        } else {
            buttonDelete.disabled = true;
            buttonEdit.disabled = true;
        }
    })
    console.log(arr.filter(f => f.isChecked))
}

//Заполение таблицы из массива
const basicData = ars => {
    localStorage.setItem("list", JSON.stringify(ars))
	const newTbody = document.querySelector('tbody')
    const TRS = newTbody.querySelectorAll("tr")

    for(let trI = 0; trI < TRS.length; trI++){
        TRS && TRS.length > 0 && TRS[trI].remove()
    }

    ars && ars.length && ars.map((item, arrayNumber) => {

        const newRow = document.createElement('tr');
        newTbody.append(newRow);
        for(let key in item) {
            if( key === 'isChecked') {
                const newTD = document.createElement('td');
                const newBtn = document.createElement('input');
                newBtn.type = "checkbox";
                newBtn.onclick = () => handleCheck(arrayNumber)
                newTD.append(newBtn);
                newRow.append(newTD);
            } else {
                const newTD = document.createElement('td');
                newRow.append(newTD);
                newTD.textContent = item[key];
            }

        }
    })
}

if(localStorage.list){
    arr = JSON.parse(localStorage.list)
    basicData(arr)
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
    newObj.isChecked = false;
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

//Удаление ряда
const deleteRow = () => {
    const newArr = arr.filter(f => (f.isChecked !== true));

    basicData(newArr);
}

//Редактирование ряда
const editRow = () => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i].isChecked == true){
            const allTd = document.querySelectorAll('td');
            for(let j = (6 * i); j <= ((i + 1) * 6 - 2); j ++){
                let input = document.createElement("input");
                input.value = allTd[j].innerHTML;
                allTd[j].innerHTML = '';
                allTd[j].append(input);

                input.addEventListener("blur", () => {
                    allTd[j].innerHTML = input.value;
                })
            }
        }
    }
}

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

/*const tableSearch = (value) => {
    let newArr = []
    arr.filter(f => f['name'].indexOf(value) !== -1)
    basicData(newArr);
}*/

//

//События сортировки
const addSortByIncreaceListeners = () => {
    for(let i = 0; i < AllTh.length - 1; i++){
        AllTh[i].querySelector(".increase").addEventListener("click",() => sortIncrease(AllTh[i], AllTh.i));
    }
}

const addSortByDegreaseListeners = () => {
    for(let i = 0; i < AllTh.length - 1; i++){
        AllTh[i].querySelector(".degrease").addEventListener("click", () => sortDegrease(AllTh[i], AllTh.i));
    }
}
addSortByIncreaceListeners()
addSortByDegreaseListeners()

//Событие поиска
findFromTable.addEventListener("keyup", e => tableSearch(e.target.value))
addBtn.addEventListener("click", addData)

//Событие удаления ряда
buttonDelete.addEventListener("click", deleteRow);

// Событие редактирования ряда
buttonEdit.addEventListener("click", editRow);