import { useState, useEffect } from "react";
import RestaurantDetails from "../components/RestaurantDetails";

function DetailsPage() {
    
    return (
      <div style={{ flex: 2, padding: "20px" }}>
        <h2>Details</h2>
        <RestaurantDetails restaurant={selectedRestaurant} />
        {/**displays details of a selected restaurant */}
      </div>
    );
}

export default DetailsPage