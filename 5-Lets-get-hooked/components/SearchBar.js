import React ,{useState} from 'react';

const filterData = (searchTerm, restaurants) => {
    return restaurants.filter(restaurant =>  restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
}

const SearchBar = ({filteredRestaurants,allRestaurants,changeRestaurantList}) => {
    // console.log(restaurants, setRestaurants);
    const [query, setQuery] = useState("");
    const handleSearch = () => {
        let data = filterData(query, allRestaurants);
        changeRestaurantList(data);
    }

    return <>
    <div className="search-area"><h2 className="heading"> {filteredRestaurants.length} Restaurants</h2>
        <div className="form">
            <input type="text" className="" value={query} placeholder="Filter Restaurants" onChange={(e) => setQuery(e.target.value)} />
            <button type="button" onClick={handleSearch}>Search</button>
        </div></div>
    </>
}

export default SearchBar;