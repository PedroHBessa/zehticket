

import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { BiSearch, Search } from "react-icons/bi"
import { AiOutlineMenu } from "react-icons/ai"


import UserMenu from "./UserMenu";
import MenuMb from "./MenuMb";


function NavBar() {

  const [userName, setUserName] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [rectTop, setRectTop] = useState(false);

  



  useEffect(()=>{

    const menuMb = document.querySelector(".menu-mb");
    menuMb.style.transform = `translateY(${-menuMb.clientHeight}px)`;
   

  
  },[])

    const toggleMenu = () => {

      
     
      const menuMb = document.querySelector(".menu-mb");

  
      menuMb.style.opacity = 1

        if (menuIsOpen) {
          menuMb.style.transform = `translateY(${-menuMb.clientHeight}px)`;
      
          
          
        } else {
          menuMb.style.transform = `translateY(0px)`;
          
          
         
        }
        setMenuIsOpen(!menuIsOpen)
      };


 
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
    <>
      
      <div className="navbar">
      <div className="navbar__logo">
        {" "}
      ZEHTICKET
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
          
        <span className="navbar__producer-btn">
          <a target={"_blank"} href="https://adm.zehticket.com.br/">ÁREA DO PRODUTOR</a>
    
          </span>
    
      
      </ul>
    
      <div className="mob-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    
        
      </div>
  
   
    </div>
    <div  onClick={toggleMenu}>
      <MenuMb />
    </div>
    
     
 
   
    </>
  );
}

export default NavBar;
