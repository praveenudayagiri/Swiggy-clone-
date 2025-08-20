import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { HOME_RESTAURANTS_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [loading, setLoading] = useState(true);
  const ResCardPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(HOME_RESTAURANTS_API_URL);
      const json = await data.json();
      const dynamicData =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurant(dynamicData);
      setFilteredRestaurants(dynamicData);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setListOfRestaurant([]);
      setFilteredRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h2>Looks like you are offline</h2>;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (ListOfRestaurant.length === 0) {
    return <p>Try another restaurant</p>;
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          const isPromoted =
            restaurant.info.differentiatedUi?.displayType ===
            "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT";
          const Card = isPromoted ? ResCardPromoted : ResCard;

          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Card resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
