import React,{useState} from 'react';
import './App.css';
import Table from './components/table'
import Form from './components/form'

function App() {
  const [tableData, setTableData] = useState([])

  return (
    <div id="app">
      <header>
        <h3>Список чего-либо</h3>
      </header>
      <main>
        <Form/>
        <Table data={tableData}/>
      </main>

    </div>
  );
}

export default App;
