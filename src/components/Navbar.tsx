import { Container } from "./styles/Container.styled";
import {
  StyledNavbar,
  NavbarWrapper,
  NavbarLogo,
  NavbarNav,
  NavbarCart,
  NavbarCartIcon,
  NavbarLink,
  BurgerNav,
  BurgerButton,
  BurgerClose
} from "./styles/Navbar.styled";
import { useState } from "react";



const Navbar = () => {
  // @ts-ignore
  const [cartSum, setCartSum] = useState<number>(0);
  const [burgerShow, setBurgerShow] = useState<string>('none');

  return (
    <NavbarWrapper>
      <Container>
        <StyledNavbar>
          <NavbarLogo>
            <img src="src/assets/bike-icon.png" alt="bike icon" />
          </NavbarLogo>
          <NavbarNav>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/">Bicycles</NavbarLink>
            <NavbarLink to="/">Accessories</NavbarLink>
            <NavbarLink to="/">About us</NavbarLink>
            <NavbarLink to="/">Contact</NavbarLink>
          </NavbarNav>
          <BurgerButton onClick={() => setBurgerShow('flex')}/>
          <NavbarCart>
            ${cartSum}
            <NavbarCartIcon />
          </NavbarCart>
        </StyledNavbar>
        <BurgerNav display={burgerShow}>
          <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/">Bicycles</NavbarLink>
            <NavbarLink to="/">Accessories</NavbarLink>
            <NavbarLink to="/">About us</NavbarLink>
            <NavbarLink to="/">Contact</NavbarLink>
            <BurgerClose onClick={() => setBurgerShow('flex')} />
          </BurgerNav>
      </Container>
    </NavbarWrapper>
  );
};
export default Navbar;
