import { SectionContainer, SectionTitle, Subtitle } from "../theme/components";
import ZLogo from "../assets/ZetLogo.svg";
import ReadMoreLink from "./ReadMoreLink";
import { Text } from "../theme/components";

const HomeAboutSection = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionTitle>about</SectionTitle>
      <Subtitle>who am I?</Subtitle>
      <div style={{ padding: "3rem 0" }}>
        <img
          src={ZLogo}
          alt="my personal logo - Z letter"
          style={{ float: "left" }}
        />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci
          asperiores ipsam, tempora iure dolor minus? Vel, nam, aspernatur unde
          numquam rerum doloribus repellat delectus sunt quis minima iste. Nihil
          itaque sapiente, sint illum id commodi neque accusamus cum quas
          consectetur deleniti esse! Corporis iste fuga voluptatum blanditiis
          odio eveniet.
        </Text>
      </div>
      <ReadMoreLink path="/about">more about me</ReadMoreLink>
    </SectionContainer>
  );
};

export default HomeAboutSection;
