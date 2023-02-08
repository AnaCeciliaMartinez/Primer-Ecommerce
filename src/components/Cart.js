import React, { useState } from 'react'
import CardList from './CardList'

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleClick = (game) => {
        setCart([...cart, game]);
        setTotal(total + game.price);
    }

    return (
        <div className='flex flex-col'>
            <CardList lista={cart} handleClick={handleClick}/>
            <div className='cartTotal'>
                <h3>total a pagar: {total} $</h3>
            </div>
        </div>
    )
}




export default Cart