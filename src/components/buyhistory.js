import React from 'react'
import a from '../images/background.jpg'
import b from '../images/bck.jpg'
import c from '../images/bg.jpg'
import d from '../images/ckg.jpg'
import './buyhistory.css'
import AppHeader from './App_Header'

export const Buyhistory = () => {
    return(
        <>
        <AppHeader/>
        <div class="container-b">
          <img alt="back" src={a}/>
            <img alt="bck" src={b}/>
            <img alt="bg" src={c}/>
            <img alt="ckg" src={d}/>
        </div>
        </>
    )
}