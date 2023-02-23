import { useDispatch } from "react-redux";
import { removeAllItems } from "./cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();


  

  const handleRemoveAllItems = () => {
    dispatch(removeAllItems(item.id));
  };

  const price = parseFloat(item.price).toFixed(2);
  const total = (price * item.quantity).toFixed(2);

  return (
    <div className="bg-white rounded-lg p-4">
      <figure className="flex justify-between items-center">
        <img src={item.image} alt={item.name} className="w-20" />
        <figcaption className="flex-grow ml-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500">Precio: ${price}</p>
          <p className="text-gray-500">Cantidad: {item.quantity}</p>
          <p className="text-gray-500">
            Total: ${total}
          </p>
          <div className="flex justify-between items-center mt-4">
           
            
              
            
            <button
              className="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 ml-2"
              onClick={handleRemoveAllItems}
            >
              Eliminar
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CartItem;
