import React from "react";
import { useParams } from "react-router-dom";

import './details.css';
import Ok from 'C:/Users/Hp/Desktop/web/colx/src/components/images/okay 2.jpg';

function Detail(){
    const { id } = useParams();
    return(
         <div class="view">
            <h2>Id= {id}</h2>
          <div class="images">
               <div class="img">
                    <img alt="ok" src={Ok} /></div>
                     edit profile picture
          </div>
          <div class="infos"> {/*info about the product here */}
                <h1 className="prname">Name of the product</h1><br/>
                <h2 className="price">Price:</h2><br/>
                <p>Description about the product </p>
           </div>
                <button class="save">Save changes</button>
                <button class="discard">Discard</button>
        </div>

    )
}

export default Detail;