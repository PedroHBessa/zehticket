

import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { BiSearch, Search } from "react-icons/bi"


import UserMenu from "./UserMenu";
import NavBarConsole from "./NavBarConsole";

function NavBar() {




 
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
        <BiSearch fill="#787878" size={'1.3em'} style={{position: "absolute", top: "41%", marginLeft: "15px"}} />
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
        <Link id="contact" to={"/login"}>Login</Link>
          </li>
          <li >
        <Link id="contact" to={"/signup"}>Cadastre-se</Link>
          </li>
       
      
      </ul>
      </div>
      <div className="navbar__producer-btn">
      <a target={"_blank"} href="https://adm.zehticket.com.br/">ÁREA DO PRODUTOR</a>
     
    </div>
   
    </div>
    )
     
 
      <div>
    
      </div>
    </div>
  );
}

export default NavBar;
