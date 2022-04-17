import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/img1.jpg"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCalendarCheck } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'


function Card(props) {

  return (
    <Link to="test">
      <div className="card">
          <div className="hover">
            <span>VER EVENTO</span>
            </div>
      
   
          <div className="card__img">
            <img src={bg} width="100%" height="215" alt="" srcSet="" />
          </div>
       

        <div className="card__content">
          <h1>Evento do Marquin</h1>
          <p>#eletrônica #dance #psico</p>
          <div className="card__content__info">
              <BsCalendarCheck size={'19px'} />
              <span>20/09/2022</span>
            </div>
            <div className="card__content__info">
              <AiOutlineClockCircle size={'19px'}/>
              <span>19:00h</span>
            </div>
            <div className="card__content__info">
              <GoLocation size={'19px'}/>
              <span>Silva Jardim - RJ</span>
            </div>

        </div>
        </div>
     
    </Link>
  );
}

export default Card;
