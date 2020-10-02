import React,{useState} from 'react';
import './App.css';
import Table from './components/table'
import Form from './components/form'
import Edit from './components/edit'

function App() {
  const [tableData, setTableData] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const fields = {name, description}
  const handleEvents = {setName, setDescription}

  return (
    <div id="app">
      <header>
        <h3>Список чего-либо</h3>
      </header>
      <main>
        <Form {...handleEvents} {...fields}/>
        <Table/>
        <Edit />
      </main>

    </div>
  );
}

export default App;
