
import React from "react";
import { useNavigate } from 'react-router-dom';
import './sel-items.css'

function Sellitem ({id,amount,product_name,date}) {

  let navigate=useNavigate()
  /*const handleClick = event => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log(`Image clicked ${id}`);
  };  */

    return(
        <div className="sellitems"  onClick={()=>navigate(`details/${id}`)}>
          <img className="sell-img" alt="ad" src={`https://robohash.org/${id}`}/>
          <div>
            <h2>Price: {amount}</h2>
            <p>{product_name} ; {date}</p>
          </div>
        </div>
    )
}

export default Sellitem;