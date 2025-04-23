import { useState, useEffect } from "react";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import "./App.css";
import Form from "./Form";
import { SearchBar } from "./components/Search-bar";

function App() {
  const [restaurants, setRestaurants] = useState([]); //sets state of restaurants to an empty array
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); //sets state for the selected restaurants

  useEffect(() => {
    fetch("http://localhost:3000/restaurants") // db.json data
      .then((r) => r.json())
      .then((data) => setRestaurants(data));
  }, []);

  function handleRestaurantClick(restaurant) {
    //takes the restaurant object as an argument
    setSelectedRestaurant(restaurant); //updates selected restaurant and renders when a restaurant is clicked
  }

  return (
    <>
      <SearchBar />
      <div style={{ display: "flex" }}>
        <div
          style={{ flex: 1, padding: "20px", borderRight: "10px solid #ccc" }}
        >
          <h2>Restaurants</h2>
          <RestaurantList
            restaurants={restaurants} //passes the list of restaurants from state to the RestaurantList component as a prop
            onRestaurantClick={handleRestaurantClick} //passes the handle click function that gets called when a restaurant is clicked
          />
        </div>
        <div style={{ flex: 2, padding: "20px" }}>
          <h2>Details</h2>
          <RestaurantDetails restaurant={selectedRestaurant} />
          {/**displays details of a selected restaurant */}
        </div>
      </div>
      <Form></Form>
    </>
  );
}

export default App;
