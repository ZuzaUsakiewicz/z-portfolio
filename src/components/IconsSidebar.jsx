import styled from "styled-components";
import GithubLogo from "../assets/githubIcon.svg";
import LinkedinLogo from "../assets/linkedinIcon.svg";
import { FlexRowCenter, FlexColumnCenter } from "../theme/styleHelpers";
import { mediaQueries } from "../theme/mediaQueries";

const IconsSidebarContainer = styled.div`
  ${FlexRowCenter};
  gap: 1rem;
  position: relative;
  padding: 1rem 0;
  @media ${mediaQueries.mobileL} {
    ${FlexColumnCenter};
    position: absolute;
    right: 0.5rem;
  }
  @media ${mediaQueries.laptop} {
    right: -15%;
  }
`;
const LogoContainer = styled.div`
  ${FlexColumnCenter};
  position: relative;
  transition: transform 0.3s linear;
  img {
    object-fit: cover;
  }

  &.blue::before,
  &.purple::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 1px;
    transition: transform 0.3s linear;
    @media ${mediaQueries.mobileL} {
      width: 1px;
      height: 5rem;
    }
  }
  &.blue::before {
    background: ${({ theme }) => theme.colors.blue};
    left: -150%;
    @media ${mediaQueries.mobileL} {
      top: -230%;
      left: 50%;
    }
  }
  &.purple::after {
    background: ${({ theme }) => theme.colors.purple};
    right: -130%;
    @media ${mediaQueries.mobileL} {
      bottom: -210%;
      right: 50%;
    }
  }
  @media ${mediaQueries.laptop} {
    &:hover {
      transform: scale(1.1);
    }
    &:hover.blue::before,
    &:hover.purple::after {
      transform: scale(0.5);
    }
  }
`;

const IconsSidebar = () => {
  return (
    <IconsSidebarContainer>
      <a
        href="https://github.com/ZuzaUsakiewicz"
        target="_blank"
        rel="noreferrer"
      >
        <LogoContainer className="blue">
          <img src={GithubLogo} />
        </LogoContainer>
      </a>
      <a
        href="https://www.linkedin.com/in/zuzanna-usakiewicz/"
        target="_blank"
        rel="noreferrer"
      >
        <LogoContainer className="purple">
          <img src={LinkedinLogo} />
        </LogoContainer>
      </a>
    </IconsSidebarContainer>
  );
};

export default IconsSidebar;
