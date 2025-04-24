import { useState } from "react";

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
      });

    //   reseting the form
    setFormData(initialValues);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Add Restaurant</p>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleChange}
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
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
