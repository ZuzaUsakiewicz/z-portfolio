import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoSvg from "../assets/ZetLogo.svg";
import { CgMenuGridR } from "react-icons/cg";
import {
  FlexColumnCenter,
  FlexRowCenter,
  FlexRowSpaceBetween,
} from "../theme/styleHelpers";
import { useState } from "react";
import { mediaQueries } from "../theme/mediaQueries";

const NavigationBar = styled.nav`
  padding: 0.5rem 1rem;
  ${FlexRowSpaceBetween};
  width: 100%;
  max-width: 1200px;
`;
const Logo = styled(Link)`
  position: relative;
  width: 3rem;
  height: 3rem;
  z-index: 999;
  transition: transform 0.3s linear;
  img {
    object-fit: cover;
  }
  &:hover {
    transform: translateY(-0.4rem);
  }
`;

const LinksContainer = styled.ul`
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-140%)"};
  list-style-type: none;
  ${FlexColumnCenter};
  gap: 1rem;
  font-size: 1.5rem;
  position: fixed;
  inset: 0;
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  background: rgba(11, 8, 53, 0.8);
  transition: transform 0.5s linear, opacity 0.7s linear;
  z-index: 100;
  @media ${mediaQueries.laptop} {
    position: relative;
    opacity: 1;
    transform: translate(0);
    ${FlexRowCenter};
    gap: 4rem;
    background: transparent;
    padding: 0.5rem;
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  position: relative;
  @media ${mediaQueries.laptop} {
    &::after {
      content: "";
      bottom: 0;
      left: 50%;
      position: absolute;
      z-index: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.green};
      width: 2rem;
      height: 2rem;
      filter: blur(10px);
      -webkit-filter: blur(10px);
      opacity: 0;
      transform: translate(-50%, 0);
      transition: opacity 0.3s linear;
    }
    &:hover::after {
      opacity: 1;
    }
  }
`;

const Hamburger = styled.button`
  ${FlexRowCenter};
  border: none;
  z-index: 1000;
  background: transparent;
  @media ${mediaQueries.laptop} {
    visibility: hidden;
  }
`;

const BurgerIcon = styled(CgMenuGridR)`
  color: ${({ openMenu, theme }) =>
    openMenu ? theme.colors.blue : theme.colors.purple};
  font-size: 3rem;
  transition: color 0.3s linear;
`;

const CallToAction = styled(Link)`
  background: linear-gradient(180deg, #43c4ed 0%, #ca32f0 100%);
  border-radius: 1rem;
  padding: 0.5rem 2rem 0.6rem 2rem;
  position: relative;
  span {
    z-index: 999;
    color: white;
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: ${({ theme }) => theme.colors.darkBg};
    background-clip: border-box;
    border-radius: 1rem;
    z-index: 0;
    transition: background 0.3s linear;
  }
  @media ${mediaQueries.laptop} {
    position: absolute;
    top: 0;
    right: -26rem;
    &:hover::before {
      background: transparent;
    }
  }
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <NavigationBar>
      <Logo to="/">
        <img src={LogoSvg} alt="Z logo" />
      </Logo>
      <LinksContainer
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        onClick={() => setOpenMenu(false)}
      >
        <li>
          <NavigationLink to="/">home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/projects">projects</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/stack">stack</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/about">about</NavigationLink>
        </li>
        <CallToAction to="/contact">
          <span>contact</span>
        </CallToAction>
      </LinksContainer>

      <Hamburger onClick={() => toggleMenu()}>
        <BurgerIcon openMenu={openMenu} />
      </Hamburger>
    </NavigationBar>
  );
};

export default Navbar;
