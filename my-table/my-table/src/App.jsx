import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from 'react-router-dom'
import Modal from "./ui/Modal";
import Select from "./ui/Select";
import Checkbox from "./ui/Checkbox";
import RadioButton from "./ui/RadioButton";

function App() {

  return (
    <div id="app">
      <Tabs items={[{name: "таблица", href: "/table"}, {name: "домой", href: "/home"}]} />

      <Switch>
        <Route path="/table">
          <TableContainer/>
        </Route>
        <Route path="/home">
          {/*<Select items={[{value: 1, text: "Санкт-Петербург", selected: false, disabled: false},*/}
          {/*  {value: 2, text: "Выборг", selected: true, disabled: true},*/}
          {/*  {value: 3, text: "Москва", selected: false, disabled: false}*/}
          {/*  ]}/>*/}
          {/*<Checkbox />*/}
          {/*<RadioButton items={["Радиокнопка-2", "Радиокнопка-1"]}/>*/}
          <Modal>
            <span>HELLO WORLD!!!</span>
          </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
