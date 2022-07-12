import React from "react";
import { useContext } from "react";
import { useState,createContext } from "react";
import AppHeader from "./components/App_Header";
import Itemlist from "./components/Itemlist";

export const ItemContext=createContext()
export const Items=[
    {
        id:'0',
        brand:'tesla',
        category:'Book',
        title:'React',
        description:'this is the book for react ',
        price:'100'
    },
    {
        id:'1',
        brand:'tata',
        category:'Book',
        title:'Angular',
        description:'this is the book for angular ',
        price:'200'
    },
    {
        id:'2',
        brand:'tesla',
        category:'Cycle',
        title:'React',
        description:'this is the book for react ',
        price:'300'
    },
    {
        id:'3',
        brand:'tata',
        category:'Electronics',
        title:'Angular',
        description:'this is the book for angular ',
        price:'400'
    },
    {
        id:'4',
        brand:'tesla',
        category:'Electronics',
        title:'React',
        description:'this is the book for react ',
        price:'500'
    },
    {
        id:'5',
        brand:'tata',
        category:'Fashion',
        title:'Angular',
        description:'this is the book for angular ',
        price:'800'
    },
    {
        id:'6',
        brand:'tesla',
        category:'Fashion',
        title:'React',
        description:'this is the book for react ',
        price:'1000'
    },
    {
        id:'7',
        brand:'tata',
        category:'Sports',
        title:'Angular',
        description:'this is the book for angular ',
        price:'20'
    },
    {
        id:'8',
        brand:'tesla',
        category:'Sports',
        title:'React',
        description:'this is the book for react ',
        price:'600'
    },
    {
        id:'9',
        brand:'tata',
        category:'Book',
        title:'Angular',
        description:'this is the book for angular ',
        price:'400'
    }

]

export const ItemProvider=(props)=>{
    const [item_state, setitem_state] = useState(Items)
    return(
        <ItemContext.Provider value={[item_state,setitem_state]}>
            {props.children}
        </ItemContext.Provider>
    )
}
