import React, {useState} from 'react';
import './style.css'
import DelImg from './img/delete.png'
import EditImg from './img/edit.png'
import Modal from "../../ui/Modal"

const Edit = ({data, setFilterTableData}) => {

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
          onChange={e => {
            const tableValue = e.target.value
            const filterData = [...data].filter(f => {
              return f['name'].indexOf(tableValue) > -1
            })
            filterData && filterData.length ? setFilterTableData(filterData) : setFilterTableData(null)
          }}
        />
      </form>
      <button className="del" disabled={true}>
        <img src={DelImg}/> Удалить
      </button>
      <Modal>
        <span>HELLO WORLD!!!</span>
      </Modal>
    </div>
  )
}


export default Edit