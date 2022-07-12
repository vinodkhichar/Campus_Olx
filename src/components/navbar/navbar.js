import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar =() => {

    const navRef= useRef();

    const showNav=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link className="a" to='/'>Profile</Link>
                <Link className="a" to='/editview'>View and edit </Link>
                <Link className="a" to='/buyhistory'>Buying history</Link>
                <Link className="a" to='/sellhistory'>Selling history</Link>
                <button  className="nav-btn nav-cls-btn" onClick={showNav}>
                    <FaTimes/>
                </button>
            </nav>
            <button  className="nav-btn" onClick={showNav}>
                <FaBars/>
            </button>
        </header>
    )
}