import ResCard from "./ResCard";

const withPromotedLabel=(ResCard)=>{
   
    return(props)=>{
        return(
            <div className="res-card-wrapper">
                <label className="promo-card-label">Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    };
};
export default withPromotedLabel;