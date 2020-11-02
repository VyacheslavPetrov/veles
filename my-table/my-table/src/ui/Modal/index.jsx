import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const modalElement = document.getElementById('modal')
const el = document.createElement('div')

const Modal = ({children, defaultOpen = false}) => {
  const [isOpen, setIsOpenModal] = useState(defaultOpen)

  useEffect(() => {
    modalElement.appendChild(el)
    return () => {
      modalElement.removeChild(el)
      el.remove()
    }
  },[])

  return(
    <div className="modal__container">
      <button onClick={() => setIsOpenModal(!isOpen)}>Open</button>
      {isOpen && ReactDOM.createPortal(
        <div className="modal">
          <span onClick={() => setIsOpenModal(false)}>X</span>
          {children}
        </div>,
        el
      )}
    </div>
  )
}

export default Modal