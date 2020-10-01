import React from 'react';

const Form = () => {

  return (
    <div className="add">
      <input type="text" name="name" placeholder="enter name" />
      <input type="text" name="description" placeholder="enter description" />
      <input type="text" name="info1" placeholder="add info 1" />
      <input type="text" name="info2" placeholder="info 2" />
      <div className="btn">
        <button type="button">Добавить</button>
      </div>
    </div>
  )
}

export default Form