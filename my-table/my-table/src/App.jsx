import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from 'react-router-dom'
import ClassModal from "./ui/ClassModal";
import SelectModal from "./ui/Select";
import Checkbox from "./ui/Checkbox";
import RadioButton from "./ui/RadioButton";
import {MaterialRadioButton} from "./ui/RadioButton";
import SwitchButton from "./ui/Switch"

import {BasicTable} from "./ui/Columns/BasicTable.js";

function App() {

  return (
    <div id="app">
      <Tabs items={[{name: "таблица", href: "/table"}, {name: "домой", href: "/home"}]} />

      <Switch>
        <Route path="/table">
          <TableContainer/>
        </Route>
        <Route path="/home">
          <BasicTable />
          <SelectModal>
            <span>Санкт-Петербург</span>
            <span>Москва</span>
          </SelectModal>


          <ClassModal>
            <div>
              <Checkbox />
              <RadioButton items={["Радиокнопка-2", "Радиокнопка-1"]} />

            </div>
          </ClassModal>
          <SwitchButton switchArr = {[{defaultChecked: true, colorOnChecked: "red", disabled: false, size: "large"},
          {defaultChecked: false, colorOnChecked: "yellow", disabled: true, size: "medium"}]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
