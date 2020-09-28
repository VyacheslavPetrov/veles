import React, {useCallback} from 'react'

const Nested = ({count, iterator, setIterator, setCount, classes, style, text, children}) => {
  const handleChangeCount = useCallback(() => {
    setIterator(iterator + 10 - count)
    setCount(count + 1)
  },[count, iterator])

  return(
    <>
      <button onClick={handleChangeCount}>Add count</button>
      <div className={classes} style={style}>{text + ' ' + children}</div>
    </>
  )
}

export default Nested


