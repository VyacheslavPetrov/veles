import React,{useState, useCallback} from 'react'
import './style.css'


const Table = ({data, handleSortDegrease, handleSortIncrease}) => {
  const [increaseField, setIncreaseField] = useState('')
  const [degreaseField, setDegreaseField] = useState('')

  const handleIncreaseSort = useCallback((field) => {
    handleSortIncrease(field)
    setIncreaseField(field)
    setDegreaseField('')
  }, [increaseField, degreaseField, handleSortIncrease])

  const handleDegreaseSort = useCallback((field) => {
    handleSortDegrease(field)
    setDegreaseField(field)
    setIncreaseField('')
  }, [increaseField, degreaseField, handleSortIncrease])

  return (
    <table className="info-table">
      <thead>
      <tr>
        <th className="id" >
          id
          <span
            className="increase"
            name="id"
            onClick={(e) => {
              handleIncreaseSort(e.target.getAttribute('name'))
            }}
            style={degreaseField === 'id' ? {display : 'inline'}: {}}
          >
            &#8593;
          </span>
          <span
            className="degrease"
            name="id"
            onClick={e => handleDegreaseSort(e.target.getAttribute('name'))}
            style={increaseField === 'id' ? {display : 'inline'}: {display : 'none'}}
          >
            &#8595;
          </span>
        </th>
        <th className="name">
          name
          <span
            className="increase"
            name="name"
            onClick={(e) => handleIncreaseSort(e.target.getAttribute('name'))}
            style={increaseField === 'name' ? {display : 'inline'}: {}}
          >
            &#8593;
          </span>
          <span
            className="degrease"
            onClick={handleSortDegrease}
            style={degreaseField === 'name' ? {display : 'inline'}: {display : 'none'}}
          >
            &#8595;
          </span>
        </th>
        <th className="description">
          description
          <span
            className="increase"
            name="description"
            onClick={(e) => handleIncreaseSort(e.target.getAttribute('name'))}
            style={increaseField === 'description' ? {display : 'inline'}: {}}
          >
            &#8593;
          </span>
          <span
            className="degrease"
            onClick={handleSortDegrease}
            style={degreaseField === 'description' ? {display : 'inline'}: {display : 'none'}}
          >
            &#8595;
          </span>
        </th>
        <th className="info1">
          info 1
          <span
            className="increase"
            name="info1"
            onClick={(e) => handleIncreaseSort(e.target.getAttribute('name'))}
            style={increaseField === 'info1' ? {display : 'inline'}: {}}
          >
            &#8593;
          </span>
          <span
            className="degrease"
            onClick={handleSortDegrease}
            style={degreaseField === 'info1' ? {display : 'inline'}: {display : 'none'}}
          >
            &#8595;
          </span>
        </th>
        <th className="info2">
          info 2
          <span
            className="increase"
            name="info2"
            onClick={(e) => handleIncreaseSort(e.target.getAttribute('name'))}
            style={increaseField === 'info2' ? {display : 'inline'}: {}}
          >
            &#8593;
          </span>
          <span
            className="degrease"
            onClick={handleSortDegrease}
            style={degreaseField === 'info2' ? {display : 'inline'}: {display : 'none'}}
          >
            &#8595;
          </span>
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