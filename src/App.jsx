import React from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a className='quantityMinus' title = "Decrement"><span>-</span></a>
        <input type="text" name='quantity' className='quantityInput' value={myState} />
        <a className='quantityPlus' title = "Increment"><span>+</span></a>
      </div>

    </div>
    </>
  )
}

export default App;