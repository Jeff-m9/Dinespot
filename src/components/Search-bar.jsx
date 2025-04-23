import React, { useState } from "react";

export function SearchBar() {
  // State to hold the user's input from the search field
  const [searchInput, setSearchInput] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("");
  };

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search Restaurant"
        onChange={handleChange}
        value={searchInput}
        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-5 w-196"
      ></input>

      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition mt-5">
        Search
      </button>
    </form>
  );
}
