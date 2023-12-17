import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
export const Navbar = ()=>{
    const [linksClass,setLinksClass]=useState("nav-links");
    const [hideClass,setHideClass]=useState("close-menu");
    const showLinks = ()=>{
        setLinksClass("nav-links-active");
        setHideClass("close-menu-active");
    }
    const hideLinks = ()=>{
        console.log("clicked");
        setLinksClass("nav-links");
        setHideClass("close-menu");
    }
    return (
        <div class="navbar">
            <div class="logo">
                {/* <img src="./pc2.jfif" alt="logo"> */}
                <h3 style={{color:"red"}}>DailyBuzz</h3>
            </div>
            <ul class={linksClass}>    
                <li><Link to={'/'}>General</Link></li>
                <li><Link to={'/business'}>Business</Link></li>
                <li><Link to={'/sport'}>Sports</Link></li>
                <li><Link to={'/science'}>Science</Link></li>
                <li><Link to={'/entertainment'}>Entertainment</Link></li>
                <li><Link to={'/health'}>Health</Link></li>
                <li><Link to={'/technology'}>Technology</Link></li>
            </ul>
    
            <div class="burger-menu" onClick={showLinks}>&#9776;</div>
            <div class={hideClass}  onClick={hideLinks}>&#10006;</div>
        </div>
    );
}




