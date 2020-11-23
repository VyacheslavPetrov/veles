import React, {useState} from 'react';
import './style.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

export function MaterialRadioButton ({items = []}) {
  const [value, setValue] = React.useState('Клюква');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <FormControl component="fieldset">
      <FormLabel component="legend">Berries</FormLabel>
      <RadioGroup aria-label="berries" name="berry1" value={value} onChange={handleChange}>
        {items.map((item, key) =>
          <FormControlLabel
            value={item.name}
            disabled={item.disabled}
            style={{color: item.color}}
            control={<Radio />}
            label={item.disabled ? "(Disabled option)" : item.name}
            key={key}

          />)}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButton