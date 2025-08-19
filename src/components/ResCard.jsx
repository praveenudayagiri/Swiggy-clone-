import { CDN_URL } from "../utils/constants";


const ResCard = ({resData}) =>{
    
    const {name,cloudinaryImageId,cuisines,avgRating,sla}=resData.info;
    return(
        <div className="res-card">
            <img className="res-image" src={CDN_URL+cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};


export default ResCard;