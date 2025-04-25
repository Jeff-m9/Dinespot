import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { toast } from "react-toastify";
import "./Form.css"


const initialValues = {
  name: "",
  cuisine: "",
  location: "",
  special: "",
  image: "",
};

function Form({handleFetch}) {
  const [formData, setFormData] = useState(initialValues);
  // console.log(formData)

  // to handle the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Restaurant added successfully");

    
    // console.log("form submitted");

    //   using Fetch API to create a resource using POST-network request when the form is submited

    fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(() => {
        handleFetch();
      })
 

    //   reseting the form
    setFormData(initialValues);
  };

  return (
    <div className="formContainer" id="form-container">
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

      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <p className="text-4xl font-bold text-white">Add Restaurant</p>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-196 text-2xl"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="cuisine"
            placeholder="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-196 text-2xl"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-196 text-2xl"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="special"
            placeholder="special"
            value={formData.special}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-196 text-2xl"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={formData.image}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-200 rounded-lg shadow-sm mt-5 w-196 text-2xl"
            required
          />
        </div>
        <button type="submit" className="rounded-lg bg-green-400 p-2 text-2xl mt-10 w-30">
          Add
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Form;
