import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;

`;

export const ItemPhoto = styled.div`
  width: 100%;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    vertical-align: bottom;
  }
`;

export const ItemCategory = styled.div`
  font-size: 0.85rem;
  opacity: .6;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.h2`
    font-family: "Racing Sans One", serif;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 400;  
`

export const ItemPrice = styled.div`
    font-weight: 700;
    color: #4B4F58;
`
