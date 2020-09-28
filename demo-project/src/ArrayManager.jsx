import React, {useState} from 'react'

const ArrayManager = ({handleChangeArray}) => {
  const [name, setName] = useState('')
  const onChangeArray = () => handleChangeArray(name)

  return (
    <p>
      <input
        type="text"
        name="firstName"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <button onClick={onChangeArray}>Set Array</button>
    </p>
  )
}

export default ArrayManager