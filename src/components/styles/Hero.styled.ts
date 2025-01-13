import styled from "styled-components";
import { SiTarget } from "react-icons/si";

interface Props {
  font: string;
}

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      rgba(75, 79, 88, 0.7) 0%,
      rgba(75, 79, 88, 0.7) 50%,
      rgba(47, 193, 255, 0.7) 50%,
      rgba(47, 193, 255, 0.7) 100%
    ),
    url("../src/assets/bike-hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroInner = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media screen and (max-width: 1024px) {
    width: 50%;
    padding-left: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: 640px) {
    width: 70%;
  }
`;

export const HeroSubtitle = styled.div<Props>`
  font-family: "Racing Sans One", serif;
  font-size: ${({ font }) => font};
  text-transform: capitalize;
`;

export const HeroTitle = styled.h1`
  font-family: "Racing Sans One", serif;
  text-transform: capitalize;
  font-size: 5.3rem;
  line-height: 1.4em;
  font-weight: 400;
`;

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 10px;
`;

export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  :last-child {
    padding-bottom: 0;
  }
`;

export const HeroItemIcon = styled(SiTarget)`
    padding-right: 10px;
`
