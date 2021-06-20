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

  const [q, setQ] = useState("");
  //we are searching countries by name and capital
  const [searchParam] = useState(["name", "capital"]);

  useEffect(() => {
    // here we fetch our code
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

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

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
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <Input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for the countries"
              value={q}
              /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>

        <Countries>
          {search(items).map((item) => (
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
const Input = styled.input`
  @media (min-width: 1600px) {
    padding: 25px;
    width: 800px;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 20px;
    width: 800px;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
    width: 600px;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (max-width: 800px) {
    padding: 20px;
    width: 450px;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media (max-width: 500px) and (min-width: 400px) {
    padding: 15px;
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media (max-width: 400px) {
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
