import React from "react";
import styled from "styled-components";

function Card({
  img,
  name,
  callingCode,
  population,
  region,
  capital,
  currencies,
  language,
}) {
  return (
    <Container>
      <Flag src={img} />
      <Title>
        <h3>{name}</h3>
      </Title>
      <Info>
        <p>Calling Code: {callingCode}</p>
        <p>Language Spoken: {language}</p>
        <p>Currency: {currencies}</p>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
      </Info>
    </Container>
  );
}

export default Card;
const Container = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    max-width: 300px;
    background-color: #cfcfcf;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    :hover {
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      transform: scale(1.02) !important;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    max-width: 250px;
    background-color: cfcfcf;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    max-width: 150px;
    background-color: cfcfcf;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
const Flag = styled.img``;
const Title = styled.div`
  margin: 15px 15px 15px 15px;
`;
const Info = styled.div``;
