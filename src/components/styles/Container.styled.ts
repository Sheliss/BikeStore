import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    max-width: 1024px;
  }

  @media screen and (max-width: 768px) {
    max-width: 768px;
  }

  @media screen and (max-width: 640px) {
    max-width: 640px;
  }
`;
