import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
  Text,
} from "../theme/components";

const About = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>about me</SectionTitle>
        <Subtitle>little more personal</Subtitle>
        <Container>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            deleniti, fuga veritatis quo recusandae dolorum atque asperiores
            ipsum, ipsa odio tempore incidunt accusamus reprehenderit in
            consectetur aspernatur magni odit repudiandae.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            distinctio ipsa, quod repudiandae vero natus quisquam harum et
            nostrum. Vel aperiam veniam vero aut fugit nostrum saepe, eaque amet
            cupiditate!
          </Text>
        </Container>
      </SectionContainer>
    </Container>
  );
};

export default About;
