
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ cheese, setCheese ] = useState(null);

  // Cheese Array URL
  const URL = "http://localhost:4000/cheese/";

  // Fetches cheese data from array url
  const getCheese = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCheese(data);
  };

  const createCheese = async (chees) => {
    // make post request to create cheese
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(chees),
    });
    // update list of cheese
    getCheese();
  };

  const updateCheese = async (chees, id) => {
    // make put request to create cheese
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(chees),
    });
    // update list of cheese
    getCheese();
  }

  const deleteCheese = async id => {
    // mak delete request to create pople
    await fetch (URL + id, {
      method: "DELETE",
    })
    // update list of cheese
    getCheese();
  }

  useEffect(() => getCheese(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index cheese={cheese} createCheese={createCheese} />
        </Route>
        <Route
          path="/cheese/:id"
          render={(rp) => (
            <Show
            cheese={cheese}
            updateCheese={updateCheese}
            deleteCheese={deleteCheese}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;

