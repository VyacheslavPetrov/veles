import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import './style.css'

const selectElement = document.getElementById('select-modal')
const element = document.createElement('div')

function getCoords(elem) {
  const box = elem.getBoundingClientRect()
  return {
    top: box.top + window.pageYOffset + elem.clientHeight + box.height,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
    width: box.width,
    height: box.height
  }
}

const SelectModal = ({children, defaultOpen = false}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(defaultOpen)


  useEffect(() => {
    selectElement.appendChild(element)
    return () => {
      selectElement.removeChild(element)
      element.remove()
    }
  },[])
  let leftPos = 0, topPos = 0
  const el = document.querySelector('.select-span')
  if (el) {
    const {left, top} = getCoords(el)
    leftPos = left
    topPos = top
  }

  return (
    <div className="select__container">
      <span className="select-span" onClick={() => setIsSelectOpen(!isSelectOpen)} >Выборг</span>
      {isSelectOpen && ReactDOM.createPortal(
        <div className="select" style={{left: leftPos, top: topPos}}>
          <span onClick={() => setIsSelectOpen(false)} />
          {children}
        </div>,
        element
      )}
    </div>
  )
}

{/*function Select({items = []}) {

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
}*/}

export default SelectModal