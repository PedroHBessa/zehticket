import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import NavBarConsole from "./NavBarConsole";
import Panel from "./Panel";
import UserMenu from "./UserMenu";

const Main = () => {

    const navigate = useNavigate()

    const [userLogged, setUserLogged] = useState(false)
    const [btnText, setBtnText] = useState("logar")

    const changeLoggedStatus = () => {
        if(userLogged){
            setBtnText("Logar")
            setUserLogged(false)
            navigate("../", { replace: true });

        } else {
            setBtnText("Deslogar")
            setUserLogged(true)
            
        }
    }


    return (
        
        <>
        <input id="btn" type="button" value={btnText} onClick={()=>{changeLoggedStatus()}}/>
        {userLogged 
        
        ?
        <> 
        <NavBarConsole />
        <UserMenu />
        <Outlet />
        </>
        :  <>
                <NavBar />
                <Outlet />
        </>
          
            
       
        }
         <Footer /> 
        
        </>
    )
}

export default Main;