import { SectionContainer, SectionTitle, Subtitle } from "../theme/components";
import CardsContainer from "./CardsContainer";
import ReadMoreLink from "./ReadMoreLink";

const HomeProjectsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>projects</SectionTitle>
      <Subtitle>favorite apps I've made</Subtitle>
      <CardsContainer />
      <ReadMoreLink path="/projects/"> more projects</ReadMoreLink>
    </SectionContainer>
  );
};

export default HomeProjectsSection;
