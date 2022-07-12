import React, { Component } from 'react'
import App_Header from './components/App_Header'
import Footer from './components/Footer'
import Itemlist from './components/Itemlist'


export class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor:'rgb(0.5,0.5,0.5)'}}>
        <App_Header/>
        <Itemlist/>
        <Footer/>
      </div>
    )
  }
}

export default Home