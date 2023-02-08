import React from 'react'
import Cards from './Cards'

 const CardList = (props) => {
    return (
    <div className='mx-20 flex flex-col md:grid grid-cols-4 gap-4 my-50'>
        {props.lista.map(game => <Cards key={game.id} game={game}/>)}
    </div>
    )
}

export default CardList