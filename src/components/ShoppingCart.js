import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPrice = 0; 

  const handleClearCart = () => {

    dispatch(clearCart());
   
    
   

 
  };

  return (
    <>
      <h2 className="text-white">Carrito de compras</h2>
      <h3 className="text-white">Tus productos</h3>
      <div className="mx-20 flex flex-col md:grid grid-cols-4 gap-4 my-50">
        {cart.map((item, index) => {
          totalPrice += item.price * item.quantity; 
          return <CartItem key={index} item={item} />;
        })}
      </div>
      <div className="text-lg text-white font-bold mt-5">Total: ${totalPrice.toFixed(2)}</div>
      
      <button
        className="bg-[#4f46e5] text-white-2 rounded-lg w-40"
        onClick={handleClearCart}
      >
        Vaciar carrito
      </button>
      <button
        className="bg-[#4f46e5] text-white-2 rounded-lg w-40"
       
      >
        Finalizar compra
      </button>
      <h3 className="text-white">Productos recomendados</h3>
    </>
  );

};

export default ShoppingCart;
