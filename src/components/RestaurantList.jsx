import { Link } from "react-router-dom";
import "./RestaurantList.css"

function RestaurantList({ restaurants, handleFetch }) {
  function handleDelete(restaurantId) {
    fetch(
      `https://680b4e5fd5075a76d98a9b41.mockapi.io/restaurants/${restaurantId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then(() => {
        handleFetch();
      });
  }

  return (
    <ul className="grid grid-cols-4">
      {/**renders an unordered list */}
      {restaurants.map((restaurant) => (
        <li
          id="restaurant-list"
          key={restaurant.id} //sets a unique key(id)
          style={{
            cursor: "pointer",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to={`/restaurants/${restaurant.id}`} className="text-3xl">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-48 h-48 rounded-2xl shadow-lg"
            />
            {restaurant.name}
            {/**displays restaurant name */}
          </Link>
          <button
            onClick={() => {
              handleDelete(restaurant.id);
            }}
            className="rounded-lg bg-gray-400 p-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
