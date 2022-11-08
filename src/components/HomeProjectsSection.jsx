import { SectionContainer, SectionTitle, Subtitle } from "../theme/components";
import CardsContainer from "./CardsContainer";
import ReadMoreLink from "./ReadMoreLink";

const HomeProjectsSection = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionTitle>projects</SectionTitle>
      <Subtitle>favorite apps I've made</Subtitle>
      <CardsContainer />
      <ReadMoreLink path="/projects/"> more projects</ReadMoreLink>
    </SectionContainer>
  );
};

export default HomeProjectsSection;
