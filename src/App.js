import './App.css';
 
import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar/>
          <News country="us" category="science" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/>
        </div>
      </>
    )
  }
}