const RestaurantCard = ({avgRating, cloudinaryImageId, cuisines, name}) => {
    console.log(avgRating);
    return (
        <a href="/" className="card">
            <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <p>{avgRating} Stars</p>
        </a>
    );
}

export default RestaurantCard;