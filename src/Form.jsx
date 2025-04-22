import { useState } from "react";

const initialValues = {
  name: "",
  cuisine: "",
  location: "",
  menu: "",
  image: "",
};

function Form() {
  const [formData, setFormData] = useState(initialValues);

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
    console.log("form submitted");

    //   using Fetch API to create a resource using POST-network request when the form is submited

    fetch("http://localhost:3000/restraunts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });

    //   reseting the form
    setFormData(initialValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
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
            name="menu"
            placeholder="Menu"
            value={formData.menu}
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
