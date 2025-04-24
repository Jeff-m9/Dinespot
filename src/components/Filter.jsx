import React, { useState } from "react";

function Filter({ restaurants, cuisine }) {
  const [filter, setFilter] = useState("");
  
  const filteredRestaurants = restaurants.filter(
    (r) => !filter || r.cuisine === filter
  );

    cuisine = filteredRestaurants;


  return (
    <div>
      {/* <h2>Restaurants</h2> */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Italian">Italian</option>
        <option value="African">African</option>
        {/* <option value="Chilli">Chilli</option> */}
      </select>
      {/* <ul>
        {filteredRestaurants.map((r) => (
          <li key={r.id}>
            {r.name} - {r.cuisine}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Filter;
