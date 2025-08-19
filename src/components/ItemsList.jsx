import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemsList = ({ items }) => {
    const dispatch = useDispatch();
    const addItemToCart = (item) =>{
        dispatch(addItem(item));
    }
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div key={item.card.info.id} className="resmenu-item">
                                <div className="resmenu-itemleft"
                                 >
                                    <span>{item.card.info.name}</span>
                                    <span>
                                        ₹
                                        {item.card.info.price
                                            ? item.card.info.price / 100
                                            : item.card.info.defaultPrice / 100}
                                    </span>
                                    <p>{item.card.info.description}</p>
                                </div>
                                <div className="resmenu-itemright">
                                    <img src={CDN_URL+item.card.info.imageId} alt="No image"/>
                                    <button onClick={()=> addItemToCart(item)} >Add</button>
                                </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ItemsList;
