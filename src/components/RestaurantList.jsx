import { Link } from "react-router-dom";

function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <Link to={`/restaurants/${id}`}>
      <ul>
        {/**renders an unordered list */}
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id} //sets a unique key(id)
            onClick={() => onRestaurantClick(restaurant)} //adds onClick event handler that calls onRestaurantClick
            style={{
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            {restaurant.name}
            {/**displays restaurant name */}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default RestaurantList;
