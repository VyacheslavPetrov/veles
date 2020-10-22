import React,{useState, useCallback} from 'react';
import Table from './table'
import Form from './form'
import Edit from './edit'

const tableMockUp = [
  {"id": 1, "name": "Anya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 2, "name": "Petya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 3, "name": "Stepan", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 4, "name": "Vova", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 5, "name": "Vasya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false}
]

function TableContainer() {
  const [tableData, setTableData] = useState(tableMockUp)
  const [filterTableData, setFilterTableData] = useState(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')

  const handleAddData = useCallback(() => {
    setTableData(tableData.concat([{id: tableData.length+1, name: name, description: description, info1: info1, info2: info2, isChecked: false}]))
  }, [tableData.length, name, description, info1, info2])

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
  const handleEvents = {setName, setDescription, setInfo1, setInfo2, handleAddData}

  return (
    <>
      <header>
        <h3>Список чего-либо</h3>
      </header>
      <main>
        <Form {...handleEvents} {...fields}/>
        <Table data={filterTableData ? filterTableData : tableData} {...sorts} />
        <Edit data={tableData} setTableData={setTableData} setFilterTableData={setFilterTableData}/>
      </main>
    </>
  );
}

export default TableContainer;
