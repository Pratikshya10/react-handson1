import React, { Component } from 'react'
import "./Styles.css";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className='container2'>

      <h2>This is created using class component</h2>
      <p>This is done using External CSS</p>
      <p style={{color:"white"}}>This is done using inline CSS</p>

      </div>
    )
  }
}
