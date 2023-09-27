import React, { Component } from 'react'
import loadingImg from '../assest/3dgifmaker48776.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
         <img src={loadingImg} alt="loading" />
      </div>
    )
  }
}
