function RestaurantDetails({ restaurant }) {
  if (!restaurant) {//if the restaurant is null or undefined it tells the user to select a restaurant
    return <p>Select a restaurant to see details</p>;
  }

  return (
    <div className="text-3xl">
      <h1 className="text-5xl font-bold">{restaurant.name}</h1>
      <div>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="items-center w-200 h-150 mx-auto mt-3 mb-3 rounded-xl"
        />
      </div>
      <p>
        <strong>Location:</strong> {restaurant.location}
      </p>
      <p>
        <strong>Cuisine:</strong> {restaurant.cuisine}
      </p>
      <p>
        <strong>Special:</strong> {restaurant.special}
      </p>
    </div>
  );
}

export default RestaurantDetails;
