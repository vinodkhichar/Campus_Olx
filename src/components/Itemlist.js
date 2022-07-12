//jshint esversion:6

import React, { Component } from 'react'
import {useState,useContext} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { ItemContext } from '../Context'
import Sellitem from './sel-items'
import { Items } from '../Context'
import { ReactComponent as Caret } from './icons/caret.svg'
import './itemlist.css'

function Itemlist() {

    const [mobile,setMobile]=useState(false);
    const [mobileR,setMobileR]=useState(false);
    const [items,setitems]=useContext(ItemContext)
    const [range,setrange]=useState({lower:'',upper:''})
    const filter_item=(item_category)=>{
      const result=Items.filter((cur_data)=>{
        return cur_data.category===item_category
      })
      setitems(result)
    }
    const filter_range=(lower,upper)=>{
      const range_result=Items.filter((item_cat)=>{
        return (item_cat.price>lower)&(item_cat.price<=upper)
      })
      setitems(range_result)
    }
  function FilterList(){
    return(
         <ul>
          <li><button class = "btn" onClick={()=>filter_item('Book')}>Books</button></li>
          <li><button class = "btn" onClick={()=>filter_item('Electronics')}>Electronics</button></li>
          <li><button class = "btn" onClick={()=>filter_item('Cycle')}>Cycles</button></li>
          <li><button class = "btn" onClick={()=>filter_item('Fashion')}>Fashion</button></li>
          <li><button class = "btn" onClick={()=>filter_item('Sports')}>Sports</button></li>
        </ul>
    )
  }
  function FilterRange(){
    return(
      <ul>
          <li><button class = "btn" onClick={()=>filter_range(0,200)}>below 200</button></li>
          <li><button class = "btn" onClick={()=>filter_range(200,400)}>200-400</button></li>
          <li><button class = "btn" onClick={()=>filter_range(400,600)}>400-600</button></li>
          <li><button class = "btn" onClick={()=>filter_range(600,800)}>600-800</button></li>
          <li><button class = "btn" onClick={()=>filter_range(800,100000)}>above 800</button></li>
        </ul>
        
    )
  }
  return (
    <div className='ad-list'>
      <OutsideClickHandler
      onOutsideClick={()=>{setMobile(false);setMobileR(false);}} >
      <div className="filter_list">
        <button className='but' onClick={()=>setMobile(!mobile)}>Fiter Items <Caret/></button>
         {mobile && <FilterList/>}
        <button className='but' onClick={()=>setMobileR(!mobileR)}>Filter Range <Caret/></button>
         {mobileR && <FilterRange/>}      
      </div>
      </OutsideClickHandler>
      <div className='itemss'>
      {items.map((item)=>(
      <Sellitem price={item.price} title={item.title} id={item.id} key={item.id} brand={item.brand} description={item.description} category={item.category}/>
      ))}
      </div>
    </div>
  )
}

export default Itemlist;
