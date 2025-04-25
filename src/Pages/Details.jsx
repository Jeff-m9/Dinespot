import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import { Link } from "react-router-dom";



function DetailsPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${restaurantId}`)
      .then((res) => res.json())
      .then(setRestaurant);
  }, [restaurantId]);

  return (
    <div id="details-container">
      <div className="text-left ml-40">
        <Link
          to={"/"}
          className="rounded-lg bg-gray-400 p-2 text-3xl text-left"
        >
          <button className="hover: cursor-pointer text-left mt-10">
            Home
          </button>
        </Link>
      </div>
      <div className="flex-2 p-5">
        <RestaurantDetails restaurant={restaurant} />
      </div>
    </div>
  );
}

export default DetailsPage;
