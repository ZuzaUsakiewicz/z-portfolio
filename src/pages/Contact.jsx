import styled from "styled-components";
import {
  Container,
  SectionContainer,
  SectionTitle,
  Subtitle,
} from "../theme/components";
import { FlexColumnStart, GradientBG } from "../theme/styleHelpers";
import { mediaQueries } from "../theme/mediaQueries";

const ContactMeForm = styled.form`
  ${FlexColumnStart};
  padding-top: 2rem;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.typography.size.mdFont};
  input,
  textarea {
    color: #efe8e8;
    background: ${({ theme }) => theme.colors.lightBg};
    border: 1px solid ${({ theme }) => theme.colors.darkBg};
    width: 16rem;
    outline-color: ${({ theme }) => theme.colors.blue};
    padding: 0.5rem 0.875rem;
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholderText};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.placeholderText};
    }

    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.placeholderText};
    }
    @media ${mediaQueries.tablet} {
      width: 22rem;
    }
  }
  button {
    cursor: pointer;
    ${GradientBG};
    border: none;
    padding: 0.5rem 2rem;
    color: inherit;
    border-radius: 0.5rem;
    margin: 1rem auto;
    transition: transform 0.3s ease-in-out;
    @media ${mediaQueries.laptop} {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Contact = () => {
  return (
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionContainer>
        <SectionTitle>contact me</SectionTitle>
        <Subtitle>via linkedin or with this form:</Subtitle>
        <ContactMeForm>
          <label htmlFor="name">name:</label>
          <input type="text" required placeholder="enter your name" />
          <label htmlFor="email">email:</label>
          <input type="email" required placeholder="enter email" />
          <label htmlFor="message">message:</label>
          <textarea rows="5" required placeholder="write what you want" />
          <button type="submit">send</button>
        </ContactMeForm>
      </SectionContainer>
    </Container>
  );
};

export default Contact;
