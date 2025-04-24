function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <ul>{/**renders an unordered list */}
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}//sets a unique key(id)
          onClick={() => onRestaurantClick(restaurant)}//adds onClick event handler that calls onRestaurantClick
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          {restaurant.name}{/**displays restaurant name */}
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
