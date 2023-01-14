import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { restaurantss } from "../constants";
import React,{ useState } from "react";
const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantss[0].data.data.cards);
    console.log(restaurants);
    const changeRestaurantList = (newVal) => {
        console.log(newVal);
        setRestaurants(newVal);
    }   
    return (    
                <div className="container">
                    <SearchBar restaurants={restaurants} changeRestaurantList={changeRestaurantList}  />
                    <div className=" cont-body">
                    {/* {console.log(restaurants[0].data.data.cards)} */}
                    {restaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    })}
                    </div>
                </div>
            );
    
}

export default Body;