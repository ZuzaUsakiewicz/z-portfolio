import React from "react";
import { useParams } from "react-router-dom";
import { projectsList } from "../data/projectsData";
import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
  Text,
} from "../theme/components";

const SingleProject = () => {
  const { id } = useParams();
  const project = projectsList[id];
  return (
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionContainer>
        <SectionTitle>{project.name}</SectionTitle>
        <Subtitle style={{ fontStyle: "italic" }}>
          {project.description}
        </Subtitle>
        <Container>
          {/* 
          here comes the image:
          <img src=""/> */}
          <h3>CASE STUDY</h3>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            veniam totam enim repellat obcaecati reprehenderit nostrum doloribus
            sapiente voluptatibus odit voluptatem facilis harum iure, numquam
            doloremque laborum aspernatur molestiae asperiores.
          </Text>
          <h3>WHAT I'VE LEARNT</h3>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            accusamus.
          </Text>
        </Container>
      </SectionContainer>
    </Container>
  );
};

export default SingleProject;
