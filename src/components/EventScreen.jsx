import "../styles/event-screen.scss";

import React from "react";
import img1 from "../assets/img1.jpg"
import Ticket from "./Ticket";
import { BsCart4 } from 'react-icons/bs'

function EventScreen(props) {
  

  

 

  


  return (

   
    <div className="event-screen">
      <div className="event-screen__content">
        <div className="event-screen__content__img">
          <img height={300} width={'100%'} src={img1} alt="imgem"></img>
        </div>
      
        <div className="event-screen__content__text">
          <h1>Evento do marquin</h1>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at accumsan ipsum. Aenean porta nisl eu libero maximus, eu blandit nisi pellentesque. Vestibulum pharetra eget elit et iaculis. Integer rutrum nibh ac justo consequat, nec commodo metus faucibus. Quisque ut interdum eros. Nullam sit amet nibh ac urna ultrices auctor ultricies hendrerit libero. Integer iaculis ex quam, vitae auctor metus porta et. Cras tempor malesuada sollicitudin. Duis egestas ipsum ut orci suscipit, et aliquet augue ultrices. Nam dapibus sem nec odio posuere pulvinar. Fusce commodo purus in venenatis luctus. Curabitur tellus nibh, tristique a luctus non, convallis et lorem. Praesent tincidunt pellentesque magna, ut porta metus convallis nec.

            Fusce cursus efficitur ipsum nec pretium. Nam fermentum condimentum tempor. Praesent consequat felis metus. Sed viverra suscipit tellus, a rhoncus eros. Etiam sodales quis augue eu egestas. Aliquam blandit tincidunt dui, a efficitur justo cursus vitae. Nunc sit amet velit fringilla, sollicitudin lectus in, sodales enim. Aliquam erat volutpat. Fusce sed nisi quis diam accumsan blandit in et leo. Sed dictum mattis felis, et porta libero pharetra eu.

            Pellentesque vehicula tincidunt convallis. Morbi lectus mauris, tristique ultrices cursus vitae, rutrum in sapien. Etiam sit amet eleifend tortor. In sem justo, pretium ut fringilla in, porta eget sem. Suspendisse ut ante rhoncus, consequat purus eu, ultrices lectus. Fusce ac sodales massa, porta viverra lorem. Donec elementum volutpat accumsan. In euismod neque id libero vestibulum, sit amet ultricies sem congue. Nunc a velit mattis, pharetra lorem vel, malesuada metus. In ultricies diam at ante ullamcorper sodales. Proin lorem orci, ornare sed commodo ut, sollicitudin a turpis. Quisque egestas velit vel enim interdum maximus. 
          </p>
 
        </div>
      
     
      </div>
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
           <BsCart4 />
                        <span>COMPRAR INGRESSO</span>
                    </div>


      
      </div>
      
    </div>
  );
}

export default EventScreen;
