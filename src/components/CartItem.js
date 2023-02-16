import { removeOneItem, removeAllItems } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { id, image, name, price, quantity = 0 } = item;
  const dispatch = useDispatch();

  return (
    <figure className="flex flex-col justify-between space-y-2">
      <img
        src={image}
        className="h-40 object-contain min-w-full rounded-xl"
        alt="producto"
      ></img>
      <p className="text-[#4f46e5] text-center font-serif text-1xl md:text-1xl">
        {name}
      </p>
      <p className="text-[#4f46e5] text-center font-serif text-1xl md:text-1xl">
        Precio: $ {price} x {quantity} = $ {price * quantity}
      </p>
      <button
        className="bg-[#4f46e5] text-white-2 rounded-lg w-full"
        onClick={() => dispatch(removeOneItem(id))}
      >
        Eliminar uno
      </button>
      <button
        className="bg-[#4f46e5] text-white-2 rounded-lg w-full"
        onClick={() => dispatch(removeAllItems(id))}
      >
        Eliminar todos
      </button>
    </figure>
  );
};

export default CartItem;
