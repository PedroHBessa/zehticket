import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./Footer";

import NavBar from "./NavBar";
import Payment from "./Payment";


const Main = () => {


    return (
     
       
      <>
                <NavBar />
                <Outlet />
                <Payment />
                <Footer /> 
        </>  
    )
}

export default Main;