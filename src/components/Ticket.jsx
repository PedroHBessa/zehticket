import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
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
                    <div className='ticket__title'>
                        <span className='ticket__title'>Pista1</span>
                       
                    </div>
                    <div className="ticket__price">
                    <span>R$10,00</span>
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