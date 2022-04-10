import { BiDownArrow } from "react-icons/bi"
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarConsole = () => {

  const [userName, setUserName] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState("");

    const toggleMenu = () => {

      
 

        if (menuIsOpen) {
          document.querySelector(".user-menu").style.transform =
          "translateY(-150%)";
          document.querySelector(".arrow").style.transform = "rotate(0deg)";
          
          
        } else {
          document.querySelector(".user-menu").style.transform = "translateY(0%)";
          document.querySelector(".arrow").style.transform = "rotate(180deg)";
          
         
        }
        setMenuIsOpen(!menuIsOpen)
      };


    return (
      <div className="navbar__user-console">
            <div className="navbar__logo">
          
            <Link to={"/"}>ZEHTICKET</Link>
            </div>


            <div className="navbar__user-console__text" onClick={() =>toggleMenu()}>
                <span>{`Bem-vindo,  nome`}</span>
            
                <img
                width={60}
                height={60}
                src={require("../assets/profile-s.jpeg")}
                alt="/"
                />
               
                <BiDownArrow className="arrow" />
               
          
            </div>
           
    </div>
    )
}

export default NavBarConsole;