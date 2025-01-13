import styled from "styled-components";

export const NewArrivalsInner = styled.div`
  padding: 80px 0;
`;

export const NewArrivalsTitle = styled.h2`
  font-family: "Racing Sans One", serif;
  text-transform: capitalize;
  font-size: 3.6rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
`;

export const NewArrivalsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
