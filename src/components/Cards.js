
import React, { useState } from 'react'




const Cards = (props) => {
  const [Cards, setCart] = useState([]);
  

  const handleClick = (game) => {
    setCart([...Cards, game]);
    
   <div/>
   
  }



    
    return (
        <figure className='flex flex-col justify-between'>
            <figcaption>
            <img src={props.game.image} className="w-40 h-40 object-contain rounded-xl mb-2" alt="game"/>
            <p className='text-[#4f46e5] font-serif text-1xl md:text-1xl'>{props.game.name}</p>
            <p className='text-[#4f46e5] font-serif text-1xl md:text-1xl'>Precio: {props.game.price}</p>
            <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2"
            onClick={() => handleClick(props.game)}>Agregar al carrito</button>
           
            </figcaption>
        </figure>
    )
}



export default Cards
