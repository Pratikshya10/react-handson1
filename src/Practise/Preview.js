import React, { useState } from 'react'
import Functional from './Functional'
import ClassComponent  from './ClassComponent'
import "./Styles.css"

const Preview = () => {

    const [click1,setName1]= useState(false)
    const [click2,setName2]= useState(false)

  return (
    <>

        <h1>Styling using Funcional and Class Component</h1>

        <div id = 'btn'>
        <button className='btn1' onClick={()=>{click1?setName1(false):setName1(true)}}>To see styling in function component</button>
        <button className='btn2' onClick={()=>{click2?setName2(false):setName2(true)}}>To see styling in class component</button>
        </div>
        <div>
          <div className='component'>
            {
              click1 && <Functional/>
            }
            {
              click2 && <ClassComponent/>
            }
          </div>
        </div>
    </>
  )
}
export default Preview