import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="menu">
      <div className="cart-header">
        <h1>Cart</h1>
        <button onClick={clearCart} className="clear-cart-button">
          Clear Cart
        </button>
      </div>
      <ItemsList items={cart} />
    </div>
  );
};

export default Cart;
