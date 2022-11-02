import { SectionContainer, SectionTitle, Subtitle } from "../theme/components";
import TechIcons from "./TechIcons";
import styled from "styled-components";
import { mediaQueries } from "../theme/mediaQueries";
import ReadMoreLink from "./ReadMoreLink";

const Addition = styled.p`
  font-size: 0.7rem;
  padding: 0.5rem 0;
  @media ${mediaQueries.laptop} {
    font-size: 1rem;
  }
`;

const HomeStackSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>my stack</SectionTitle>
      <Subtitle>what I'm using on a regular basis</Subtitle>
      <Addition>* currently learning</Addition>
      <TechIcons />
      <ReadMoreLink path="/stack">read more</ReadMoreLink>
    </SectionContainer>
  );
};

export default HomeStackSection;
