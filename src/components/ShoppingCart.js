import CartItem from "./CartItem";

import { clearCart, cartReducer } from "../store/cartSlice";

const shoppingCart = () => {
  return (
    <>
      <h2 className="text-white">Carrito de compras</h2>
      <h3 className="text-white">Tus productos</h3>
      <div className="mx-20 flex flex-col md:grid grid-cols-4 gap-4 my-50">
        {/* deberia traer el cart del cartSlice-no se si esto esta bien*/}
        {cartReducer.cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <button
        className="bg-[#4f46e5] text-white-2 rounded-lg w-40"
        onClick={clearCart()}
      >
        Vaciar carrito
      </button>
      <button className="bg-[#4f46e5] text-white-2 rounded-lg w-40">
        Finalizar compra
      </button>
      <h3 className="text-white">Productos recomendados</h3>
    </>
  );
};

export default shoppingCart;
