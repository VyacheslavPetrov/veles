import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from "react-router-dom"

function App() {

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
    <div id="app">
      <Tabs items={[{name: "таблица", href: "/table"}, {name: "домой", href: "/home"}]} />

      <Switch>
        <Route path="/table">
          <TableContainer/>
        </Route>
        <Route path="/home">
          <span>HOME</span>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
