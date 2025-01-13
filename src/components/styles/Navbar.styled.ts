import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface Props {
  display: string;
}

export const NavbarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  background: transparent;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const StyledNavbar = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  min-height: 70px;
  align-items: center;
  color: #fff;
`;


export const NavbarLogo = styled.div`
  cursor: pointer;
  img {
    width: 70px;
  }
  @media screen and (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const NavbarNav = styled.div`
  font-weight: 500;
  text-transform: uppercase;

  a {
    padding: 0 16px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BurgerNav = styled.div<Props>`
  display: none;
  width: 100%;
  background-color: rgba(75, 79, 88, 1);
  padding: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;

  font-weight: 500;
  text-transform: uppercase;
  a {
    padding: 0 16px;
    color: #fff;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
    flex-direction: column;
  }
`

export const BurgerButton = styled(GiHamburgerMenu)`
  font-size: 40px;
  cursor: pointer;
  display: none;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    display: block;
  }

`

export const BurgerClose = styled(IoMdClose)`
  font-size: 40px;
  color: #fff;
  margin: 0 auto;
  padding: 5px 0;
  cursor: pointer;
`

export const NavbarLink = styled(Link)`
  padding: 0 16px;
  color: #fff;
`

export const NavbarCart = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavbarCartIcon = styled(FaCartShopping)`
  padding-left: 10px;
`
