import styled from "styled-components";
import {
  FlexColumnSpaceBetween,
  FlexRowSpaceBetween,
  GradientBG,
  CardShadow,
  LinkHover,
  FlexColumnStart,
  FlexRowCenter,
} from "../theme/styleHelpers";
import { mediaQueries } from "../theme/mediaQueries";
import { Link } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";

const CardContainer = styled.div`
  ${FlexColumnSpaceBetween};
  width: 16rem;
  height: 20rem;
  padding: 0.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: 0 8px 8px 0;
  ${CardShadow};
  p {
    text-align: justify;
    font-weight: ${({ theme }) => theme.typography.weight.light};
  }
  &::before {
    content: "";
    position: absolute;
    width: 0.4rem;
    height: 100%;
    top: 0;
    left: 0;
    ${GradientBG};
    border-radius: 6px 0 0 6px;
  }
  @media ${mediaQueries.laptop} {
    width: 20rem;
    height: 24rem;
    background: transparent;
    transition: background 0.4s linear;
    &:hover {
      background: ${({ theme }) => theme.colors.lightBg};
    }
  }
`;

const CardHeader = styled.div`
  ${FlexRowSpaceBetween};
  gap: 1rem;
  width: 100%;
  padding: 0 0.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 6rem;
  img {
    object-fit: contain;
  }
  @media ${mediaQueries.laptop} {
    width: 8rem;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  ${FlexColumnStart};
  height: 70%;
  width: 70%;
  h5 {
    font-size: ${({ theme }) => theme.typography.size.xsFont};
    font-style: italic;
    font-weight: ${({ theme }) => theme.typography.weight.light};
  }
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.lgFont};
    text-align: center;
    h5 {
      font-size: 1.1rem;
    }
  }
`;

const ProjectTechnologies = styled.ul`
  ${FlexColumnStart};
  span {
    ${FlexRowCenter};
    gap: 0.2rem;
    p {
      font-size: 0.7rem;
    }
  }
  @media ${mediaQueries.laptop} {
    span {
      p {
        font-size: ${({ theme }) => theme.typography.size.xsFont};
      }
    }
  }
`;

const LinksContainer = styled.div`
  ${FlexRowSpaceBetween};
  gap: 2rem;
  padding: 1.5rem;

  .card-link {
    position: relative;
    font-size: 1.2rem;
    font-size: ${({ theme }) => theme.typography.size.xsFont};
    &::after {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      width: 100%;
      height: 0.1rem;
      ${LinkHover};
      transform: scale(0);
      transform-origin: right;
      transition: transform 0.3s linear;
    }
    &:hover::after {
      transform: scale(100%);
      transform-origin: left;
    }
    @media ${mediaQueries.laptop} {
      font-size: 1.1rem;
    }
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      <CardHeader>
        <ImageContainer>
          <img src={project.image} />
        </ImageContainer>
        <InfoContainer>
          <h4>{project.name}</h4>
          <h5>build with:</h5>
          <ProjectTechnologies>
            {project.stack.map((st, index) => (
              <span>
                <TiTickOutline fill="#35D161" />
                <p key={index}>{st}</p>
              </span>
            ))}
          </ProjectTechnologies>
        </InfoContainer>
      </CardHeader>
      <p style={{ padding: "0 0.5rem" }}>{project.description}</p>
      <LinksContainer>
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="card-link"
        >
          live website
        </a>
        <Link to={`/projects/${project.link}`} className="card-link">
          see details
        </Link>
      </LinksContainer>
    </CardContainer>
  );
};

export default ProjectCard;
