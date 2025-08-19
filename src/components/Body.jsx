import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { HOME_RESTAURANTS_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";
const Body = () =>{
    const [ ListOfRestaurant, setListOfRestaurant ] = useState([]);
    const [filterdRestaurants, setfilteredRestaurants] = useState([]);
    const[searchTxt,setsearchTxt] = useState("");
    const ResCardPrmotoed=withPromotedLabel(ResCard);

    useEffect(()=>{
        FetchData();
    },[]);

const FetchData = async()=>{
        const data = await fetch(HOME_RESTAURANTS_API_URL);
        const json = await data.json();
        const dynamicData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        /** Saving Data in Two Lists and manipulating second List eveytimw while rendering */
        setListOfRestaurant(dynamicData);
        setfilteredRestaurants(dynamicData);
        
    };

    const onlineStaus=useOnlineStatus();
    if(!onlineStaus){
        return(
            <h2>Look like your are offline now</h2>
        )
    }

    if(ListOfRestaurant.length===0){
        return(
            <Shimmer/>
        )
    }

    return ListOfRestaurant.length===0 ?(
        <Shimmer/>
    ): (
        <div className="body">
            <div className="filter">
                <input type="text" value={searchTxt} 
                /*** Every time we type each letter searchTxt will be updated and whole component is re-rendered */
                onChange={(e)=>{
                    setsearchTxt(e.target.value);
                }}  
                />
                <button className="search-btn"
                /*** Rather than getting data from filterRestaurants we are getting filtered data from original data which we got from API */
                    onClick={()=>{
                        const filterdList = ListOfRestaurant.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
                        });

                  
                        setfilteredRestaurants(filterdList);
                    }}
                >Search</button>
            <button onClick={()=>{
                const filterdList = ListOfRestaurant.filter((res)=>{
                    return res.info.avgRating > 4
                })
                setfilteredRestaurants(filterdList);
            }
            
            }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {
                filterdRestaurants.map((restaurant) => {
                const isPromoted = restaurant.info.differentiatedUi?.displayType === "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT";
                const Card = isPromoted ? ResCardPrmotoed : ResCard;

                return (
                    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                    <Card resData={restaurant} />
                    </Link>
                );
                })
            }
            </div>

        </div>
    )
};


export default Body;