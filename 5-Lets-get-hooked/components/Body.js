import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { restaurantss } from "../constants";
import React,{ useState, useEffect } from "react";
import { Image, Shimmer } from 'react-shimmer'

const ShimmerContent = () => {
    return <>
    <div className="container">
                  
                    <div className=" cont-body">
                    
                    {[1,2,3,4,5,6,7,8,9,0].map((elem, index) => {
                        return <div className="shimmi" fallback={<Shimmer width={250} height={250} />}></div>
                    //     return  <Image key={index} className="shimmi"
                    //     src='https://source.unsplash.com/random/800x600'
                    //     fallback={<Shimmer width={250} height={250} />}
                    //   />
                    })}
                    </div>
                </div>
    </>
}

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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
                    {filteredRestaurants.length == 0 ? <ShimmerContent /> :  filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    })}
                    </div>
                </div>
            );
    
}

export default Body;