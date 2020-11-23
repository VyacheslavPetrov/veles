import React, {useState} from 'react';
import './style.css'



function SwitchButton ({switchArr= []}) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="switch-area">
      {switchArr.map((item, key) =>
        <div className="switch-container"
             onClick={() => setChecked(!checked)}
             disabled={item.disabled}
             style={{
               backgroundColor: item.defaultChecked ? item.colorOnChecked : "lightgray",
               transform: item.size === "medium" ? "scale(1)" : "scale(1.5)"

             }}
             key={key}
        >
          <div className="slider"
               style={{
                transform: item.defaultChecked ? "translateX(26px)" : "translateX(0px)",
                width: item.size === "medium" ? "26px" : "39px",
                heigth: item.size === "medium" ? "26px" : "39px"

               }}
          />
        </div>
      )
      }
    </div>
  )
}

export default SwitchButton