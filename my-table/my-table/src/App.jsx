import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from 'react-router-dom'
import Modal from "./ui/Modal";
import SelectModal from "./ui/Select";
import Checkbox from "./ui/Checkbox";
import RadioButton from "./ui/RadioButton";
import {MaterialRadioButton} from "./ui/RadioButton";
import SwitchButton from "./ui/Switch"
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


          <Modal>
            <div>
              <Checkbox />
              <RadioButton items={["Радиокнопка-2", "Радиокнопка-1"]} />

            </div>
          </Modal>
          <SwitchButton switchArr = {[{defaultChecked: true, colorOnChecked: "red", disabled: false, size: "large"},
          {defaultChecked: false, colorOnChecked: "yellow", disabled: true, size: "medium"}]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
