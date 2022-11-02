import { SectionContainer, SectionTitle, Subtitle } from "../theme/components";
import ZLogo from "../assets/ZetLogo.svg";
import ReadMoreLink from "./ReadMoreLink";
import styled from "styled-components";
import { mediaQueries } from "../theme/mediaQueries";

const Text = styled.p`
  padding: 0 0.5rem;
  text-align: justify;
  font-weight: ${({ theme }) => theme.typography.weight.light};
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.mdFont};
    width: 40rem;
  }
`;

const HomeAboutSection = () => {
  return (
    <SectionContainer>
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
