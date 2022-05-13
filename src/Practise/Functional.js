import React from 'react';
import "./Styles.css"

const Functional = ()=> {
  return (
    <div className='container1' >

      <h2>This is created using Functional component</h2>
      <p>This is done using External CSS</p>
      <p style={{color:"red"}}>This is done using inline CSS</p>
      
    </div>
  )
}

export default Functional;