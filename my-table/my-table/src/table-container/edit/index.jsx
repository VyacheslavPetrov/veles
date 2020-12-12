import React, {useState} from 'react';
import './style.css'
import DelImg from './img/delete.png'
import EditImg from './img/edit.png'
import Modal from "../../ui/Modal"
import Responce from '../../response.json'
import {fetchData} from '../index.jsx'
import ClassNames from 'classnames'

const Edit = ({data, setFilterTableData, checkArray, setCheckArray, setTableData}) => {
  const deleteFunc = () => {
    setTableData(table => table.filter((f, key) => !checkArray.includes(key)))
    setCheckArray([])
  }
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
      <button className="del" disabled={!checkArray.length} onClick={deleteFunc}>
        <img src={DelImg}/> Удалить
      </button>
      <Modal>
        <span>HELLO WORLD!!!</span>
      </Modal>
    </div>
  )
}

function createPaginationArray(pagesNumbers) {
  const pagArr = []
  for(let i = 1; i <= pagesNumbers; i++){
    pagArr.push(i)
  }
  return pagArr
}

export const Pagination = ({count, currentPosition, setCurrentPosition, setTableData, allCount, setAllCount}) => {
  const pagesNumbers = Math.floor(allCount / count)
  return(

    <div className="pagination">
      {createPaginationArray(pagesNumbers).map((item, key)=>{
        const classes = ClassNames({
          "active-item": item === currentPosition,
          "visible-items": item === currentPosition - 1 || item === currentPosition + 1
        })

        return(
          <div key={key}

               className={classes}
               onClick={() => setCurrentPosition(currentPosition => {
                 fetchData(currentPosition, count, setTableData, setAllCount)
                 return item
               })}

          >
            {item}

          </div>
        )
      })}
    </div>
  )

}

export default Edit