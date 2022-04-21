import { useEffect, useState } from "react";

import "../styles/event-screen.scss";

import React from "react";
import img1 from "../assets/img1.jpg"
import Ticket from "./Ticket";
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCalendarCheck } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import br from '../assets/flag-icons-main/flags/4x3/br.svg'

import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";


function EventScreen(props) {
  

  const [offset, setOffset] = useState(0);
  const [y, setY] = useState(0)

  const rect = (el) => {
    var rect = el.getBoundingClientRect();
    setY(rect.top)

  }

  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },[])


  useEffect(() => {
    console.log('carregou')
    

      const onScroll = () => setOffset(window.pageYOffset);
      const ticketScreen = document.querySelector(".event-screen__tickets")
      rect(ticketScreen)
     
      if(y < 0){
        ticketScreen.style.position = `fixed`;
        
      } else {
        ticketScreen.style.position = `relative`;
      }
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
      
      ticketScreen.style.position = `relative`
      window.removeEventListener('scroll', onScroll);
      
      }
  }, [offset]);


 

 

  


  return (
<>
    <div className="event-screen__img">
          <img height={300} width={'100%'} src={img1} alt="imgem"></img>
        </div>
    <div className="event-screen">
      
      <div className="event-screen__content">
       
      
        <div className="event-screen__content__text">
          <p className="title">Evento do marquin</p>
          <div className="event-screen__content__info">
            <div className="event-screen__content__info__item">
              <BsCalendarCheck size={'19px'} />
              <span>20/09/2022</span>
            </div>
            <div className="event-screen__content__info__item">
              <AiOutlineClockCircle size={'19px'}/>
              <span>19:00h</span>
            </div>
            <div className="event-screen__content__info__item">
              <GoLocation size={'19px'} color={"white"}/>
              <span>Silva Jardim - RJ</span>
            </div>
          </div>
       
        
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at accumsan ipsum. Aenean porta nisl eu libero maximus, eu blandit nisi pellentesque. Vestibulum pharetra eget elit et iaculis. Integer rutrum nibh ac justo consequat, nec commodo metus faucibus. Quisque ut interdum eros. Nullam sit amet nibh ac urna ultrices auctor ultricies hendrerit libero. Integer iaculis ex quam, vitae auctor metus porta et. Cras tempor malesuada sollicitudin. Duis egestas ipsum ut orci suscipit, et aliquet augue ultrices. Nam dapibus sem nec odio posuere pulvinar. Fusce commodo purus in venenatis luctus. Curabitur tellus nibh, tristique a luctus non, convallis et lorem. Praesent tincidunt pellentesque magna, ut porta metus convallis nec.

            Fusce cursus efficitur ipsum nec pretium. Nam fermentum condimentum tempor. Praesent consequat felis metus. Sed viverra suscipit tellus, a rhoncus eros. Etiam sodales quis augue eu egestas. Aliquam blandit tincidunt dui, a efficitur justo cursus vitae. Nunc sit amet velit fringilla, sollicitudin lectus in, sodales enim. Aliquam erat volutpat. Fusce sed nisi quis diam accumsan blandit in et leo. Sed dictum mattis felis, et porta libero pharetra eu.

            Pellentesque vehicula tincidunt convallis. Morbi lectus mauris, tristique ultrices cursus vitae, rutrum in sapien. Etiam sit amet eleifend tortor. In sem justo, pretium ut fringilla in, porta eget sem. Suspendisse ut ante rhoncus, consequat purus eu, ultrices lectus. Fusce ac sodales massa, porta viverra lorem. Donec elementum volutpat accumsan. In euismod neque id libero vestibulum, sit amet ultricies sem congue. Nunc a velit mattis, pharetra lorem vel, malesuada metus. In ultricies diam at ante ullamcorper sodales. Proin lorem orci, ornare sed commodo ut, sollicitudin a turpis. Quisque egestas velit vel enim interdum maximus. 
          </p>

          <h1>LINE</h1>

          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              Jorginho tec tec do raitec 
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              psyco átrico de jurujuba 
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              forest do brokeback mountain
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              nintendo travado 64bits 
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              som ambiente de obra
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              energy generator sound
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              sharanga criminosa
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              end enemy
            </span>
           
            
          </div>
          <div className="event-screen__content__line">
            
            <span className="event-screen__content__line__country">
              <img width={20} src={br} alt="" srcset="" /> 
            </span>
            <span>
              tv chiada
            </span>
           
            
          </div>
          <div className="maps" style={{width: "100%", height: "250px", marginTop: "40px"}}>
        <GoogleMapReact

        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyCKo1tHIegRhc0l2zvvqG7dfC4nM8lYqwg",
          language: "en",
          region: "US"
        }}
        width={500}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
     
      />
      </div>
       
      
         
        </div>
      
      </div>
      <div className="tickets-ghost">
      <div className="event-screen__tickets">
        <div className="event-screen__tickets__title">
        <span>Ingressos</span>
        </div>
       
        <div className="event-screen__tickets__content">
         <Ticket title={"pista1"}/>
         <Ticket title={"pista2"}/>
         <Ticket title={"pista3"}/>
         <Ticket title={"pista4"}/>
         </div>

         <div className="event-screen__totals">
        
                        <div  className="event-screen__totals__main">Total: R$100,00</div>
                        
                        <span>10 x R$10,00 no cartão</span>
                    </div>

         <div className="event-screen__button">
         <Link to={"payment"}><BsCart4 />
                        <span>COMPRAR INGRESSO</span></Link>
                    </div>


      
      </div>
      </div>
      
    </div>
    </>
  );
}


export default EventScreen;
