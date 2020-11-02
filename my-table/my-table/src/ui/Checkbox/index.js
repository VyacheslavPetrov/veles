import React, {useState} from 'react';
import './style.css'

function Checkbox () {
  const [checked, setChecked] = useState(false)
  return (
    <span className="checkbox-container">
      <div className="checkbox-square"
           onClick={() => setChecked (!checked)}
           style={{
             width: !checked ? "16px" : "21px",
             height: !checked ? "16px" : "10px",
             borderTopStyle: !checked ? "solid" : "none",
             borderRightStyle: !checked ? "solid" : "none",
             transform: !checked ? "none" : "rotate(-45deg)"}}
      >
      </div>
      <div className="checkbox-label">Чекбокс</div>
    </span>

  )
}

export default Checkbox