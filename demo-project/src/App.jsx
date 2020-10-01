import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Nested from './Nested'
import ArrayManager from './ArrayManager'
import Checkbox from './ui/Checkbox'

const arr = ["dDASD", "ASDASD"]

function App() {
  const [count, setCount] = useState(0)
  const [iterator, setIterator] = useState(0)
  const [array, setArray] = useState(arr)

  const handleChangeArray = useCallback(name => {
      const newArr = [...array]
      newArr.push(name)
      setArray(newArr)
  },[array])

  console.log("test")
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {count}
        </p>
        <p>
          {iterator}
        </p>

        {array.map((item, key) => <p key={key}>{item}</p>)}
        <ArrayManager handleChangeArray={handleChangeArray}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Checkbox/>
      </header>
    </div>
  );
}

export default App;
