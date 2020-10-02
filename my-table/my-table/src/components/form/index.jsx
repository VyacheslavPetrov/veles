import React from 'react';

const Form = ({name, description, setDescription, setName}) => {

  return (
    <div className="add">
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="enter description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input type="text" name="info1" placeholder="add info 1" />
      <input type="text" name="info2" placeholder="info 2" />
      <div className="btn">
        <button type="button">Добавить</button>
      </div>
    </div>
  )
}

export default Form