import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a className='quantityMinus' title = "Decrement"><span>-</span></a>
        <input type="text" name='quantity' className='quantityInput' value='0' />
        <a className='quantityPlus' title = "Increment"><span>+</span></a>
      </div>

    </div>
    </>
  )
}

export default App;