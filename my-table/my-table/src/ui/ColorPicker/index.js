import React, {useState} from 'react';
import Modal from "../Modal";
import './style.css'


function ColorPicker() {
  const [isOpen, setIsOpenColorModal] = useState(false)
  return (
    <div className="color-picker">
      <div className="square">
        <Modal>
          <input type="text" name="type"/>
          <label for="type">type</label>
          <input type="text" name="color"/>
          <label for="color">color</label>
          <button onClick={}></button>
        </Modal>
      </div>
    </div>
  )
}

export default ColorPicker