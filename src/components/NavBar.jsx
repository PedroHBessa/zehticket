

import React from "react";
import { Outlet, Link } from "react-router-dom";

import { useState } from "react";
import { BiDownArrow } from "react-icons/bi"


import UserMenu from "./UserMenu";
import NavBarConsole from "./NavBarConsole";

function NavBar() {
 
  const [isLogged, setIsLogged] = useState(false);

  const menuLoggedOut = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedout">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/events">Eventos</Link>
        </li>
        <li>Contato</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="signup">Registre-se</Link>
        </li>
      </ul>
    </div>
  );

  const menuLoggedIn = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedin">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/events">Eventos</Link>
        </li>
        <li>Contato</li>
      </ul>
    </div>
  );

  const menu = () => {
 
  }

  

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
      {isLogged ? menuLoggedIn : menuLoggedOut}
    </div>
    )
     
 
      <div>
    
      </div>
    </div>
  );
}

export default NavBar;
