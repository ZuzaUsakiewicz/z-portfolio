import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../theme/components";
import { GradientBG } from "../theme/styleHelpers";
import IconsSidebar from "./IconsSidebar";
import { mediaQueries } from "../theme/mediaQueries";
import LineGH from "../assets/lineGH.svg";
import LineLI from "../assets/lineLI.svg";
import LineP from "../assets/lineP.svg";

const HeroContainer = styled(Container)`
  min-height: 35rem;
  max-height: 34rem;
  position: relative;
  @media ${mediaQueries.laptop} {
    padding: 4rem 2rem 4rem 0;
    height: 100vh;
    max-height: 1000px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-60%, -60%);
    z-index: 0;
    border-radius: 50%;
    ${GradientBG};
    /* background: ${({ theme }) => theme.colors.blue}; */
    width: 13rem;
    height: 13rem;
    filter: blur(100px);
    -webkit-filter: blur(100px);
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.xxlFont};
  text-align: center;
  line-height: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  z-index: 1;
  span {
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
  @media ${mediaQueries.mobileM} {
    padding: 1rem 5rem;
  }
  @media ${mediaQueries.laptop} {
    font-size: 7rem;
    padding-bottom: 4rem;
  }
`;

const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.weight.xLight};
  text-align: justify;
  font-size: 1rem;
  padding: 1.5rem 0.5rem;
  line-height: 1.2rem;
  z-index: 1;
  a {
    text-decoration: none;
  }
  @media ${mediaQueries.mobileM} {
    padding: 1rem 4rem;
  }
  @media ${mediaQueries.tablet} {
    max-width: 700px;
  }
  @media ${mediaQueries.laptop} {
    max-width: 900px;
    font-size: ${({ theme }) => theme.typography.size.xlFont};
    line-height: 2.6rem;
    padding: 0;
  }
`;
const BoldLinkHref = styled.a`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  position: relative;
  transition: text-shadow 0.2s linear;
  &.github {
    color: ${({ theme }) => theme.colors.blue};
    @media ${mediaQueries.laptop} {
      &:hover {
        text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.blue};
      }
    }

    &:after {
      visibility: hidden;
      @media ${mediaQueries.laptop} {
        content: url(${LineGH});
        position: absolute;
        bottom: -20px;
        left: 0;
        visibility: visible;
      }
    }
  }
  &.linkedin {
    color: ${({ theme }) => theme.colors.purple};
    @media ${mediaQueries.laptop} {
      &:hover {
        text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.purple};
      }
    }
    &:after {
      visibility: hidden;
      @media ${mediaQueries.laptop} {
        content: url(${LineLI});
        position: absolute;
        bottom: -20px;
        left: 1rem;
        transform: rotate(-2deg);
        visibility: visible;
      }
    }
  }
`;

const BoldLinkRoute = styled(Link)`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.green};
  transition: text-shadow 0.2s linear;
  @media ${mediaQueries.laptop} {
    &:hover {
      text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.green};
    }
  }
  span {
    position: relative;
    &::after {
      visibility: hidden;
      @media ${mediaQueries.laptop} {
        content: url(${LineP});
        position: absolute;
        bottom: -1.2rem;
        transform: rotate(2deg);
        left: 1rem;
        visibility: visible;
      }
    }
  }
`;

const HomeHeroSection = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        Hello! I'm <span>Zuza</span>,
      </Title>
      <Text>
        <span> a Front-end developer</span> with the ability to absorb and
        assimilate new ideas with dilligence. You can check my
        <BoldLinkHref
          className="github"
          href="https://github.com/ZuzaUsakiewicz"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          github{" "}
        </BoldLinkHref>
        profile, or reach me on my
        <BoldLinkHref
          className="linkedin"
          href="https://www.linkedin.com/in/zuzanna-usakiewicz/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          linkedin
        </BoldLinkHref>
        , but before that feel free to explore my
        <BoldLinkRoute to="/projects/">
          {" "}
          <span>portfolio</span>
        </BoldLinkRoute>
        .
      </Text>
      <IconsSidebar />
    </HeroContainer>
  );
};

export default HomeHeroSection;
