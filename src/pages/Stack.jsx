import React from "react";
import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
  Text,
} from "../theme/components";
import TechIcons from "../components/TechIcons";

const Stack = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>my stack</SectionTitle>
        <Subtitle>why am I using this?</Subtitle>
        <TechIcons />
        <Container>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias
            velit beatae officiis dolor fugit blanditiis id cum doloremque
            ducimus accusamus unde optio natus eveniet architecto, omnis atque
            dolores labore! Dolores reprehenderit laborum quibusdam natus
            laboriosam accusantium provident, ipsam error.
          </Text>
        </Container>
      </SectionContainer>
    </Container>
  );
};

export default Stack;
