import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { restaurantss } from "../constants";
import React,{ useState, useEffect } from "react";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantss[0].data.data.cards);
    const [allRestaurants, setAllRestaurants] = useState([]);

    const getRestaurantData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING')
        const data = await response.json();
        console.log(data);
        setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        getRestaurantData()
    }, [])

    const changeRestaurantList = (newVal) => {
        setFilteredRestaurants(newVal);
    }   
    return (    
                <div className="container">
                    <SearchBar filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} changeRestaurantList={changeRestaurantList}  />
                    <div className=" cont-body">
                    {/* {console.log(restaurants[0].data.data.cards)} */}
                    {filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    })}
                    </div>
                </div>
            );
    
}

export default Body;