import React,{useState, useCallback} from 'react'

const Checkbox = ({checked = false}) => {
  const [isChecked, setChecked] = useState(checked)

  const handleCheck = useCallback(
    e => setChecked(e.target.checked),
    [isChecked])

  return <input
    type="checkbox"
    checked={isChecked}
    onChange={handleCheck}
  />
}

export default Checkbox