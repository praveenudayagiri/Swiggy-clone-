import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const DEFAULT_IMAGE =
    "https://cdn1.iconfinder.com/data/icons/restaurant-and-food-12/32/Restaurant_restaurant_food_dish_hand_serve-1024.png";

  return (
    <div>
      {items.map((item) => {
        const { info } = item.card;
        const price = info.price ? info.price / 100 : info.defaultPrice / 100;
        const imageUrl = info.imageId ? CDN_URL + info.imageId : DEFAULT_IMAGE;

        return (
          <div key={info.id} className="resmenu-item">
            <div className="resmenu-itemleft">
              <span>{info.name}</span>
              <span>₹{price}</span>
              <p>{info.description}</p>
            </div>
            <div className="resmenu-itemright">
              <img src={imageUrl} alt={info.name || "No image"} />
              <button onClick={() => addItemToCart(item)}>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
