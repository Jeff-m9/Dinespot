import { useState, useEffect } from "react";
import RestaurantList from "../components/RestaurantList";
import "../App.css";
import { SearchBar } from "../components/Search-bar";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css"

function HomePage() {
  const [restaurants, setRestaurants] = useState([]); //sets state of restaurants to an empty array
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //sets state of filtered restaurants
  
  const handleFetch = () => {
    fetch("http://localhost:3000/restaurants") // db.json data
      .then((r) => r.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data); // Initialize the filtered list with the full data
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center p-5">
        <SearchBar
          restaurants={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <Filter
          restaurants={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
      </div>

      <div className="flex">
        <div className="flex-1 p-5">
          <h2 className="font-bold text-3xl">Restaurants</h2>
          <RestaurantList
            restaurants={filteredRestaurants} //passes the list of filtered restaurants from state to the RestaurantList component as a prop
            handleFetch={handleFetch}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
