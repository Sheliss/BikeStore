import { Container } from "./styles/Container.styled";
import { HeroWrapper, HeroInner, HeroSubtitle, HeroTitle, HeroList, HeroItem, HeroItemIcon } from "./styles/Hero.styled";
import Button from "./Button";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroInner>
          <HeroSubtitle font='2rem'>Newly Launched</HeroSubtitle>
          <HeroTitle>Kryo X26 MTB</HeroTitle>
          <HeroSubtitle font='1.4rem'>Specifications:</HeroSubtitle>
          <HeroList>
              <HeroItem>
                <HeroItemIcon />
                Lightweight 18" Frame
              </HeroItem>
              <HeroItem>
                <HeroItemIcon />
                Lightweight 18" Frame
              </HeroItem>
              <HeroItem>
                <HeroItemIcon />
                Lightweight 18" Frame
              </HeroItem>
          </HeroList>
          <Button text="Buy now" />
        </HeroInner>
      </Container>
    </HeroWrapper>
  );
};
export default Hero;
