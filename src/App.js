import './App.css';
 
import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="general" country="us" category="general" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/>} />
              <Route exact path="/sports" element={<News key="sports" country="us" category="sports" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/>}/>
              <Route exact path="/business" element={<News key="business" country="us" category="business" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/>}/> 
              <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/> }/>
              <Route exact path="/health" element={<News key="health" country="us" category="health" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/> } />
              <Route exact path="/science" element={<News key="science" country="us" category="science" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/> } />
              <Route exact path="/technology" element={<News key="technology" country="us" category="technology" pageSize={18} apiKey="d11f15aa496d41ffbb1ab474231a3e0c"/> } />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}