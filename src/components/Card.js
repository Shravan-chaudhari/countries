import React from "react";
import styled from "styled-components";

function Card({ img, name, population, region, capital }) {
  return (
    <Container>
      <Flag src={img} />
      <Title>
        <h1>{name}</h1>
      </Title>
      <Info>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
      </Info>
    </Container>
  );
}

export default Card;
const Container = styled.div``;
const Flag = styled.img``;
const Title = styled.div``;
const Info = styled.div``;
