import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import App_Header from './components/App_Header';
import Footer from './components/Footer'
import Login from "./components/Login";
import Sign_Up from "./components/Sign_Up";
import Forget_pass from "./components/Forget_pass";
import Home from "./Home";
import Post_Your_item from "./components/Post_Your_item";
import { Buyhistory } from "./components/buyhistory";
import { Edit } from "./components/editview";
import { Sellhistory } from "./components/sellhistory";
import { ItemProvider } from "./Context";
import Detail from "./components/details";


function App() {
  return (
      <ItemProvider>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Sign_up" element={<Sign_Up/>}/>
        <Route path="/Forget_pass" element={<Forget_pass/>}/>
        <Route path="/user">
          <Route path='' element={<Home/>}/>
          <Route path='buyhistory' element={<Buyhistory/>}/>
          <Route path='editview' element={<Edit/>}/>
          <Route path='sellhistory' element={<Sellhistory/>}/>
          <Route path=':id/:brand/:title/:description/:price/:category' element={<Detail/>}/>
          <Route path="sell" element={<Post_Your_item/>}/>
        </Route>
      </Routes>
      </ItemProvider>
  );
}

export default App;
