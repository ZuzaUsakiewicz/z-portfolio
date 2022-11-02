import styled from "styled-components";
import { CardShadow, FlexRowCenter } from "../theme/styleHelpers";
import { mediaQueries } from "../theme/mediaQueries";
import HTMLIcon from "../assets/techIcons/html.svg";
import CSSIcon from "../assets/techIcons/css.svg";
import SASSIcon from "../assets/techIcons/sass.svg";
import StyledCIcon from "../assets/techIcons/styledc.svg";
import ReactIcon from "../assets/techIcons/react.svg";
import GHIcon from "../assets/techIcons/github.svg";
import TSIcon from "../assets/techIcons/typescript.svg";
import GitIcon from "../assets/techIcons/git.svg";
import FigmaIcon from "../assets/techIcons/figma.svg";

const icons = [
  { name: "html5", icon: HTMLIcon },
  { name: "css3", icon: CSSIcon },
  { name: "sass", icon: SASSIcon },
  { name: "styled components", icon: StyledCIcon },
  { name: "react", icon: ReactIcon },
  { name: "typescript", icon: TSIcon, info: "currently learning" },
  { name: "github", icon: GHIcon },
  { name: "git", icon: GitIcon },
  { name: "figma", icon: FigmaIcon },
];

const StackContainer = styled.div`
  ${FlexRowCenter};
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 4rem 0;
  max-width: 20rem;
  @media ${mediaQueries.laptop} {
    max-width: 72rem;
    padding: 5rem 0;
  }
`;

const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: 12px;
  ${CardShadow};
  ${FlexRowCenter};
  z-index: 20;
  img {
    object-fit: cover;
    position: relative;
  }
  span {
    position: absolute;
    bottom: -60%;
    z-index: 10;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.size.xsFont};
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 0.3s linear, opacity 0.4s linear;
    @media ${mediaQueries.laptop} {
      font-size: ${({ theme }) => theme.typography.size.smFont};
    }
  }
  @media ${mediaQueries.laptop} {
    width: 7rem;
    height: 7rem;
    background: transparent;
    box-shadow: none;
    transition: all 0.4s linear;
    img {
      width: 5rem;
      height: 5rem;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.lightBg};
      ${CardShadow};
      span {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const Detail = styled.p`
  position: absolute;
  top: 0.3rem;
  right: 0;
`;

const TechIconsGrid = () => {
  return (
    <StackContainer>
      {icons.map((item, index) => (
        <IconContainer key={index}>
          <img src={item.icon} alt={item.name + " icon"} />
          {item.info ? <Detail>*</Detail> : null}
          <span>{item.name}</span>
        </IconContainer>
      ))}
    </StackContainer>
  );
};

export default TechIconsGrid;
