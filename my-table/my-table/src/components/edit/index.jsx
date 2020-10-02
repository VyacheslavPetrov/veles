import React from 'react';
import './style.css'
import DelImg from './img/delete.png'
import EditImg from './img/edit.png'


const Edit = () => {

  return (
    <div className="options">
      <button type="button" className="edit" disabled="disabled">
        <img src={EditImg}/> Редактировать
      </button>
      <form>
        <input type="text" placeholder="Найти" className="find" id="search-text"/>
      </form>
      <button className="del" disabled="disabled">
        <img src={DelImg}/> Удалить
      </button>
    </div>
  )
}


export default Edit