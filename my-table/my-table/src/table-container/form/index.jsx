import React from 'react';


const Form = ({name, description, info1, info2, setDescription, setName, setInfo1, setInfo2, handleAddData}) => {

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
      <input
        type="text"
        name="info1"
        placeholder="add info 1"
        value={info1}
        onChange={e => setInfo1(e.target.value)}
      />
      <input
        type="text"
        name="info2"
        placeholder="info2"
        value={info2}
        onChange={e => setInfo2(e.target.value)}
      />
      <div className="btn">
        <button
          disabled={!name || !description || !info1 || !info2}
          type="button"
          onClick={handleAddData}
        >Добавить</button>
      </div>

    </div>
  )
}

export default Form