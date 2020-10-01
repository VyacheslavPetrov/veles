import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <h3>Список чего-либо</h3>
      </header>
      <main>
        <div className="add">
          <input type="text" name="name" placeholder="enter name" />
          <input type="text" name="description" placeholder="enter description" />
          <input type="text" name="info1" placeholder="add info 1" />
          <input type="text" name="info2" placeholder="info 2" />
          <div className="btn">
            <button type="button">Добавить</button>
          </div>
        </div>
        <table className="info-table">
          <thead>
            <tr>
              <th className="id">
                id
                <span className="increase">&#8593;</span> <span className="degrease">&#8595; </span>
              </th>
              <th className="name">
                name
                <span className="increase">&#8593;</span> <span className="degrease">&#8595; </span>
              </th>
              <th className="description">
                description
                <span className="increase">&#8593;</span> <span className="degrease">&#8595; </span>
              </th>
              <th className="info1">
                info 1
                <span className="increase">&#8593;</span> <span className="degrease">&#8595; </span>
              </th>
              <th className="info2">
                info 2
                <span className="increase">&#8593;</span> <span className="degrease">&#8595; </span>
              </th>
              <th>check</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

      </main>

    </body>
  );
}

export default App;
