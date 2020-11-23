import React,{useState, useCallback, useEffect} from 'react';
import Table from './table'
import Form from './form'
import Edit, {Pagination} from './edit'
import Responce from '../response.json'

/*const tableMockUp = [
  {"id": 1, "name": "Anya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 2, "name": "Petya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 3, "name": "Stepan", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 4, "name": "Vova", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 5, "name": "Vasya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false}
]*/

export function getCountLines(table, position, count) {
  const newArr = [];
  for(let i = position; i < position + count; i++){
    newArr.push(table[i])
  }
  return newArr
}

export function fetchData(offset, limit, setTableData, setAllCount) {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: `http://api.dataatwork.org/v1/jobs?offset=${offset}&limit=${limit}`,
    headers: {"Access-Control-Allow-Origin": "*"}
  };

  axios(config)
    .then(function (response) {
      const newArr = response.data
      const links = response.data[response.data.length - 1].links
      const href = links[links.length - 1].href
      const urlParams = new URLSearchParams(href.split("?")[1]);
      const offset = urlParams.get('offset')
      setAllCount(offset)
      newArr.pop()
      setTableData(newArr);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function TableContainer() {
  const [tableData, setTableData] = useState([])
  const [filterTableData, setFilterTableData] = useState(null)
  const [checkArray, setCheckArray] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')
  const [count, setCount] = useState(50)
  const [currentPosition, setCurrentPosition] = useState(1)
  const [allCount, setAllCount] = useState(50)


  useEffect(() => {
    fetchData(currentPosition, count, setTableData, setAllCount)
  }, [])
    /*
    const persistTable = JSON.parse(window.localStorage.getItem("table"))
    if(persistTable) setTableData(persistTable)
 */

  const handleAddData = useCallback(() => {
    const newTable = tableData.concat([{id: Responce.identifier, name: Responce.title, description: Responce.organization, info1: Responce.organization_name, info2: Responce.topic, isChecked: false}])
    setTableData(newTable)
    window.localStorage.setItem("table", JSON.stringify(newTable))
  }, [tableData, name, description, info1, info2])

  const handleSortDegrease = (field) => {
    const sorted = [...tableData].sort((a, b) => {
      if(a[field] < b[field]){
        return -1
      } else if(a[field] > b[field]){
        return 1
      } else {
        return 0
      }
    });
    setTableData(sorted)
  }

  const handleSortIncrease = (field) => {
    const sorted = [...tableData].sort((a, b) => {
      if(a[field] < b[field]){
        return 1
      } else if(a[field] > b[field]){
        return -1
      } else {
        return 0
      }
    });

    setTableData(sorted)
  }

  //const getTableData = useMemo(() => tableData, [tableData.length])

  /*const handleSortIncrease = (field) => {
    const sorted = [...tableData].sort((a, b) => b[field] - a[field]);
    setTableData(sorted)
  }*/

  const sorts = {handleSortDegrease, handleSortIncrease}
  const fields = {name, description, info1, info2}
  const handleEvents = {setName, setDescription, setInfo1, setInfo2, handleAddData, checkArray}

  return (
    <>
      <header>
        <h3>Список чего-либо</h3>
      </header>
      <main>
        <Form {...handleEvents} {...fields}/>
        <Table data={filterTableData ? filterTableData : tableData} {...sorts} checkArray={checkArray} setCheckArray={setCheckArray}/>
        <Edit data={tableData} setTableData={setTableData} setFilterTableData={setFilterTableData} checkArray={checkArray} setCheckArray={setCheckArray}/>
        <Pagination setTableData={setTableData} count={count} currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} tableData={tableData} allCount={allCount} setAllCount={setAllCount}/>
      </main>
    </>
  );
}

export default TableContainer;
