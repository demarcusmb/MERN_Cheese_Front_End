
import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    countryOfOrigin: "",
  });

  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      countryOfOrigin: "",
      image: "",

    });
  }

  // loaded function
  const loaded = () => {
    return props.cheese.map(chees => (
      <div key={chees._id} className="chees">
        {/* Links to show page */}
        <Link to={`/cheese/${chees._id}`}>
          <h1>{chees.name}</h1>
        </Link>
        <img src={chees.image} alt={chees.name} />
        <h3>{chees.countryOfOrigin}</h3>
      </div>
    ));
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="country of origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />

        <input type="submit" value="Create cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
}

export default Index;