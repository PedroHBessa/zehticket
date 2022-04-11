

import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { BiDownArrow } from "react-icons/bi"


import UserMenu from "./UserMenu";
import NavBarConsole from "./NavBarConsole";

function NavBar() {

  const navigate = useNavigate()

  useEffect(()=>{
    let baseURL = "http://localhost:3000/"
    let loc = document.location.href.replace(baseURL, "")
    if(loc === ""){
      loc = "home"
    }
    console.log(loc)

    let liArray = document.querySelectorAll(".navbar__menu__logedout > li > a")

    liArray.forEach((el)=>{
      el.style.color = "rgba(255, 255, 255, 0.671)"
    })

    const selected = document.getElementById(loc)
    selected.style.color = "white"
   
  }
  )
 
 /*  const handleNavigation = (href, target) => {
   
   

    


    
    switch(loc){
      case "/":
        
        target.style.color = "white"
      break;
      case "/events":
        console.log("ok")
      break;
      case "/contact":
        console.log("ok")
      break;
        default: 
        console.log("error")
    }
   
    
    navigate(href)
    console.log(window.location.href)
  } */
  

  return (
    <div className="bar">
         
      <div className="navbar">
      <div className="navbar__logo">
        {" "}
      ZEHTICKET
      </div>
      <div className="navbar__search">
        <form action="">
          <input
            className="navbar__search__form__input"
            type="text"
            placeholder="procurar eventos"
          />
        </form>
      </div>
      <div className="navbar__menu">
      <ul className="navbar__menu__logedout">
        <li>
        
          <Link id="home" to={"/"}>Home</Link>
        </li>
        <li>
        <Link id="events" to={"/events"}>Eventos</Link>
        </li>
        <li >
        <Link id="contact" to={"/contact"}>Contato</Link>
          </li>
        <li>
          <a href="https://adm.zehticket.com.br/">Sou Produtor</a>
        </li>
      </ul>
    </div>
    </div>
    )
     
 
      <div>
    
      </div>
    </div>
  );
}

export default NavBar;
