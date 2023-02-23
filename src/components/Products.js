
import React from 'react';
import CardList from './CardList';

const Products = (props) => {
  


  const handleAddToCart = (product) => {
  
    props.addToCart(product);
 
  };


  
 
 
  return (
    <div>
      <h1 className='text-[#4f46e5] text-center font-serif text-2xl md:text-3xl'>Catalogo de Juegos</h1>
      <CardList lista={props.lista} />

      {props.lista.map(product => (
         <button key={product.id} onClick={() => {handleAddToCart(product);}}>Agregar al carrito</button>
      ))}
      
    </div>

  );
};

export default Products;
