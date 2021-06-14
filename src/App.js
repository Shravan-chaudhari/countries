import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log("the items are: ", items);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div className="App">
        <div className="countries">
          {items.map((item) => (
            <Card
              key={item.callingCodes}
              img={item.flag}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
