import React ,{useState} from 'react';

const filterData = (searchTerm, restaurants) => {
    console.log(restaurants);
    return restaurants.filter(restaurant =>  restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
}

const SearchBar = ({restaurants,changeRestaurantList}) => {
    // console.log(restaurants, setRestaurants);
    const [query, setQuery] = useState("");
    const handleSearch = () => {
        let data = filterData(query, restaurants);
        changeRestaurantList(data);
    }

    return <>
    <div className="search-area"><h2 className="heading"> {restaurants.length} Restaurants</h2>
        <div className="form">
            <input type="text" className="" value={query} placeholder="Filter Restaurants" onChange={(e) => setQuery(e.target.value)} />
            <button type="button" onClick={handleSearch}>Search</button>
        </div></div>
    </>
}

export default SearchBar;