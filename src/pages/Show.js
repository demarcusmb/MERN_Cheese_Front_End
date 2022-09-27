import { useState } from "react"
function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const chees = cheese.find(p => p._id === id)

    // state for form
    const [editForm, setEditForm] = useState(chees);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    //handleSubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateCheese(editForm, chees._id);
        //redirect cheese back to index
        props.histroy.push('/');
    }

    // delete function
    const removeChees = () => {
        props.deleteCheese(chees._id);
        props.history.push("/")
    }

    return (
        <div className="chees">
            <h1>{chees.name}</h1>
            <h2>{chees.countryOfOrigin}</h2>
            <img src={chees.image} alt={chees.name} />

            <button id="delete" onClick={removeChees}>DELETE</button>

            {/* Updates a chees */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="country of origin"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image url"
                    onChange={handleChange}
                />

                <input type="submit" value={"Update chees"} />
            </form>
        </div>
    )
}

export default Show;