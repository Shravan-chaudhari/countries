import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import "./App.css";
import styled from "styled-components";

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
        <Countries>
          {items.map((item) => (
            <Card
              key={item.numericCode}
              img={item.flag}
              callingCode={item.callingCodes[0]}
              language={item.languages[0].name}
              name={item.name}
              currencies={item.currencies[0].name}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))}
        </Countries>
      </div>
    );
  }
}

export default App;
const Countries = styled.div`
  @media (min-width: 1600px) {
    display: grid;
    grid-template-columns: 400px 400px 400px 400px;
    justify-content: center;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    display: grid;
    grid-template-columns: 400px 400px 400px;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 400px 400px;
    justify-content: center;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 300px 300px;
    justify-content: center;
  }
  @media (max-width: 500px) and (min-width: 400px) {
    display: grid;
    grid-template-columns: 200px 200px;
    justify-content: center;
  }
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 200px;
    justify-content: center;
  }
`;
