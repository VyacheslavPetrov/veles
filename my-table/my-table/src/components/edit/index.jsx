import React from 'react';
import './style.css'

const Edit = () => {

  return (
    <div className="options">
      <button type="button" className="edit" disabled="disabled">
        <img src="img/edit.png"/> Редактировать
      </button>
      <form>
        <input type="text" placeholder="Найти" className="find" id="search-text"/>
      </form>
      <button className="del" disabled="disabled">
        <img src="img/delete.png"/> Удалить
      </button>
    </div>
  )
}


export default Edit