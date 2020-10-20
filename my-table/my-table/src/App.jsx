import React from 'react';
import './App.css';
import TableContainer from './table-container'
import Tabs from './ui/Tabs'
import {Switch, Route} from "react-router-dom"

function App() {
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
