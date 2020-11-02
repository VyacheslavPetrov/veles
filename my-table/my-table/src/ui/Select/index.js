import React, {useState} from 'react';
import './style.css'

function Select({items = []}) {

  const [activeItem, setActiveItem] = useState(items.filter(f => f.selected === true)[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <span className="select-container">
      <div onClick={() => setIsOpen(!isOpen)}>{activeItem.text}</div>
      <div className="options-container" style={{display: isOpen ? "flex" : "none" }}>
        {items.map((option, key) =>
        <span
          style={{backgroundColor: option.disabled ? "red" : "transparent"}}
          key={key}
          onClick={() => (
            option.disabled ? false : setActiveItem(option),
              setIsOpen(false))}
        >
          {option.text}
        </span>)}
      </div>
    </span>
  );
}

export default Select