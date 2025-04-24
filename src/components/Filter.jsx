import React, { useState, useEffect} from "react";

function Filter({ restaurants, setFilteredRestaurants }) {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredRestaurants = restaurants.filter(
      (r) => !filter || r.cuisine === filter
    );
    setFilteredRestaurants(filteredRestaurants);
  }, [filter, restaurants, setFilteredRestaurants]);


  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Italian">Italian</option>
        <option value="African">African</option>
        <option value="French">French</option>
      </select>
    </div>
  );
}

export default Filter;
