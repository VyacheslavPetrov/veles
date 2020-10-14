import React, {useState} from 'react';
import './style.css'
import DelImg from './img/delete.png'
import EditImg from './img/edit.png'


const Edit = ({tableData, tableSearch, setTableData, setTableSearch}) => {

  return (
    <div className="options">
      <button type="button" className="edit" disabled="disabled">
        <img src={EditImg}/> Редактировать
      </button>
      <form>
        <input
          type="text"
          placeholder="Найти"
          className="find"
          id="search-text"
          value={tableSearch}
          onChange={e => {
            const tableValue = setTableSearch(e.target.value)
            tableData.filter(f => {
              return f.indexOf(tableValue) > -1
            })
          }}
        />
      </form>
      <button className="del" disabled="disabled">
        <img src={DelImg}/> Удалить
      </button>
    </div>
  )
}


export default Edit