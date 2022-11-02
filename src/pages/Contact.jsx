import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
} from "../theme/components";

const Contact = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>contact me</SectionTitle>
        <Subtitle>via linked or with this form:</Subtitle>
        <Container>
          <form>
            <input type="text" />
            <input type="text" />
            <textarea />
          </form>
        </Container>
      </SectionContainer>
    </Container>
  );
};

export default Contact;
