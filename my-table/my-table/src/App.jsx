import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from 'react-router-dom'
import Modal from "./ui/Modal";
import SelectModal from "./ui/Select";
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
          <SelectModal>
            <span>Санкт-Петербург</span>
            <span>Москва</span>
          </SelectModal>
          <Checkbox />
          <RadioButton items={["Радиокнопка-2", "Радиокнопка-1"]}/>
          <Modal>
            <span>HELLO WORLD!!!</span>
          </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
