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
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionContainer>
        <SectionTitle>all projects</SectionTitle>
        <Subtitle>worth mentioning</Subtitle>
        <CardsContainer />
      </SectionContainer>
    </Container>
  );
};

export default Projects;
