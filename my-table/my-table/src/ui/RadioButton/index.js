import React, {useState} from 'react';
import './style.css'

function RadioButton({items = []}) {
  const [radioChecked, setRadioChecked] = useState(null)
  return <span className="radioButton-container">
    {items.map((item, key)=>
    <div key={key}>
      <div className="radioButton-circle"
           onClick={() => setRadioChecked(key)}
           style={{
             backgroundColor: radioChecked !== key ? "transparent" : "black",
           }}
      />

      <div className="radioButton-label">{item}</div>
    </div>)}
  </span>
}

export default RadioButton