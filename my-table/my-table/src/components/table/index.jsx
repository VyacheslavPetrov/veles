import React from 'react'
import './style.css'

const tableMockUp = [
  {"id": 1, "name": "Anya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 2, "name": "Petya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 3, "name": "Stepan", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 4, "name": "Vova", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 5, "name": "Vasya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false}
]

const Table = ({data = tableMockUp}) => {

  return (
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
      {data.map((fields, key) => <tr key={key}>
        {Object.keys(fields).map((item, key) => {
          return <td key={key}>{fields[item]}</td>
        })}
      </tr>
      )}
      </tbody>
    </table>
  )
}

export default Table