import React, { useState, useEffect} from "react";

function Filter({ restaurants, setFilteredRestaurants }) {
  const [filter, setFilter] = useState("");

  const cuisines = [...new Set(restaurants.map((r) => r.cuisine))];

  useEffect(() => {
    const filteredRestaurants = restaurants.filter(
      (r) => !filter || r.cuisine === filter
    );
    setFilteredRestaurants(filteredRestaurants);
  }, [filter, restaurants, setFilteredRestaurants]);


  return (
    <div className=" rounded-lg bg-gray-400 w-25 h-10 mr-10">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg bg-gray-400 w-25 h-10 text-xl"
      >
        <option value="">All</option>
        {cuisines.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
