import React, { useState } from "react";

export function SearchBar({ restaurants, setFilteredRestaurants }) {
  // State to hold the user's input from the search bar
  const [searchInput, setSearchInput] = useState("");

  // Function to handle changes in the input field
  const handleChange = (e) => {
    const value = e.target.value; // Get the current value of the input
    setSearchInput(value); // Update the local input state

    // Filter the list of restaurants using the input value
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(value.toLowerCase())
    );

    // Pass the filtered data back up to the App component
    setFilteredRestaurants(filteredData);
  };

  return (
      <input
        type="text"
        placeholder="Search Restaurant"
        onChange={handleChange}
        value={searchInput}
        className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-150 text-2xl"
      />
  );
}
