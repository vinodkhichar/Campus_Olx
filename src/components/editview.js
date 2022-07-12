
import React from 'react'
import './editview.css'
import Ok from '../images/okay 2.jpg'
import AppHeader from './App_Header'
import { ReactComponent as Edit_symbol} from './icons/edit.svg'

export const Edit = () => {
    return(
        <div>
          <AppHeader/>
         <div class="view">
          <div class="pic">
               <div class="img">
                    <img alt="ok" src={Ok} /></div>
                    <div className="ed"><Edit_symbol/>edit profile picture</div>
          </div>
          <div class="info">
                Basic information :<br/>
                <input class="name" type="text" placeholder="Name" name="first name" required /> <br/>
                <textarea class="aboutme" type="text" placeholder="About me (optional)" name="first name" ></textarea><br/>
                Contact information : <br/>
                <input class="number" type="number" placeholder="Phone number" name="phone number"  required/><br/>
                <input class="email" type="email" placeholder="Email" name="email"/><br/>
           </div>
                <button class="save">Save changes</button>
                <button class="discard">Discard</button>
        </div>
        </div>

    )
}