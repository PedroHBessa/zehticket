import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { HiOutlineTicket, IoTicketOutline } from 'react-icons/hi'
import TicketIcon from "../assets/ticket-icon2.png"


import { useState } from 'react'

const Ticket = () => {

    const [value, setvalue] = useState(0)

    const increase = () => {
        setvalue(value + 1)
    }

    const decrease = () => {
        setvalue(value - 1)
    }

    return (
        <>
           
              
                <div className="ticket">
                    <div className="ticket__icon">
                    <img width={20} src={TicketIcon} alt="" srcset="" /> 
                    </div>
                    <div className='ticket__title'>
                    
                   
                       
                        <span className='ticket__title'>Pista - meia</span>
                       
                    </div>
                    <div className="ticket__price">
                        <div>R$10,00</div>
                        <span>( + R$3,00 de taxa )</span>
                    </div>
                    <div className='ticket__value'>
                    
                        <AiFillMinusSquare onClick={decrease} size={'1.5em'}/>
                        <span>{value}</span>
                        <AiFillPlusSquare onClick={increase} size={'1.5em'}/>
                    </div>

                
                </div>

           
        </>
    )

}

export default Ticket;