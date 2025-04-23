function RestaurantDetails({ restaurant }) {
  if (!restaurant) {//if the restaurant is null or undefined it tells the user to select a restaurant
    return <p>Select a restaurant to see details</p>;
  }

  return (
    <div>
      <h3>{restaurant.name}</h3>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        
      />
      <p>
        <strong>Location:</strong> {restaurant.location}
      </p>
      <p>
        <strong>Cuisine:</strong> {restaurant.cuisine}
      </p>
      <p>
        <strong>Menu:</strong> {restaurant.menu}
      </p>
    </div>
  );
}

export default RestaurantDetails;
