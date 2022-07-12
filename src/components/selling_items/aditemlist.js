import React from "react";
import Sellitem from "./sel-items";
import './itemlist.css'

const Additemlist=({aditem})=>{

    return(
        <div className="container-add">
         { 
        aditem.map( (items,i)=>{
        return ( <Sellitem key={aditem[i].id}    
        id={aditem[i].id} 
        amount={aditem[i].amount}
        product_name={aditem[i].name} 
        date={aditem[i].date}
        />)
         })
          }
        </div>
    )
}

export default Additemlist;