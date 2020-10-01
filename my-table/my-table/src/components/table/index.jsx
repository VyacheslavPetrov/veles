import React from 'react'
import './style.css'

const Table = ({data}) => {

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
      {data.map((item, key) => {

        return <tr key={key}>{

        }
        </tr>
      })}
      </tbody>
    </table>
  )
}

export default Table