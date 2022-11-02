import { projectsList } from "../data/projectsData";
import styled from "styled-components";
import { FlexColumnCenter, FlexRowCenter } from "../theme/styleHelpers";
import ProjectCard from "./ProjectCard";
import { mediaQueries } from "../theme/mediaQueries";

const ProjectsContainer = styled.div`
  ${FlexColumnCenter};
  margin: 0 auto;
  gap: 1rem;
  padding: 4rem 0;
  @media ${mediaQueries.laptop} {
    ${FlexRowCenter};
  }
`;

const CardsContainer = () => {
  return (
    <ProjectsContainer>
      {projectsList.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ProjectsContainer>
  );
};

export default CardsContainer;
