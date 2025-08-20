import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resMenuInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(null);

  if (!resMenuInfo) {
    return <Shimmer />;
  }

  const info = resMenuInfo?.[2]?.card?.card?.info || null;
  const menu =
    resMenuInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card
      ?.itemCards || [];
  const categories =
    resMenuInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  if (!info || menu.length === 0 || categories.length === 0) {
    return <h1>This restaurant is not serving at this moment, Please try another restaurant</h1>;
  }

  return (
    <div className="menu">
      <h1 className="resmenu-resname">{info.name}</h1>
      <h4 className="resmenu-resdetails">Rating: {info.avgRating}</h4>
      <h4 className="resmenu-resdetails">
        Cuisines: {info.cuisines?.join(", ")}
      </h4>
      <h4 className="resmenu-resdetails">
        Delivery Time: {info.sla?.deliveryTime} mins
      </h4>
      <h4 className="resmenu-resdetails">
        Price for two: {info.costForTwoMessage}
      </h4>

      {categories.map((category, index) => (
        <ResCategory
          key={category.card?.card?.title || index}
          data={category.card?.card}
          showItems={index === showIndex}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;

