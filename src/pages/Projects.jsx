import React from "react";
import CardsContainer from "../components/CardsContainer";
import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
} from "../theme/components";

const Projects = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>all projects</SectionTitle>
        <Subtitle>worth mentioning</Subtitle>
        <CardsContainer />
      </SectionContainer>
    </Container>
  );
};

export default Projects;
