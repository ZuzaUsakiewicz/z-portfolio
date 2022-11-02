import styled from "styled-components";
import { SectionContainer } from "../theme/components";
import {
  FlexColumnCenter,
  FlexRowCenter,
  FlexRowEnd,
  FlexRowSpaceBetween,
  GradientBG,
} from "../theme/styleHelpers";
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { mediaQueries } from "../theme/mediaQueries";
import { Link } from "react-router-dom";

const NoteContainer = styled.div`
  ${FlexColumnCenter};
  gap: 2rem;
  ${GradientBG};
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  max-width: 40rem;
  &::after {
    content: "";
    position: absolute;
    inset: 0.1rem;
    background: ${({ theme }) => theme.colors.darkBg};
    z-index: 0;
    border-radius: 0.5rem;
  }
  @media ${mediaQueries.tablet} {
    ${FlexRowSpaceBetween};
  }
`;

const Note = styled.p`
  text-align: left;
  position: relative;
  z-index: 1;
  @media ${mediaQueries.laptop} {
    width: 50%;
    margin: 0 auto;
  }
`;

const Icons = styled.div`
  ${FlexRowCenter};
  position: relative;
  z-index: 1;
  gap: 1.5rem;
  font-size: ${({ theme }) => theme.typography.size.xlFont};
  .link {
    ${FlexColumnCenter};
    @media ${mediaQueries.laptop} {
      transition: transform 0.2s linear;
      &:hover {
        transform: translateY(-0.2rem) scale(1.2);
      }
      &:hover span {
        transform: translateY(0.4rem) scale(1.1);
      }
    }
  }
  span {
    font-size: ${({ theme }) => theme.typography.size.xsFont};
    padding: 0.2rem 0;
    transition: transform 0.2s linear;
  }
  @media ${mediaQueries.laptop} {
    padding-right: 4rem;
  }
`;

const HomeNoteSection = () => {
  return (
    <SectionContainer>
      <NoteContainer>
        <Note>
          Currently, I'm looking for an intership/job as a Front-end/React Dev.
          Feel free to reach me out!
        </Note>
        <Icons>
          <Link to="/contact" className="link">
            <AiOutlineMail /> <span>mail</span>
          </Link>
          <a
            href="https://www.linkedin.com/in/zuzanna-usakiewicz/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <ImLinkedin2 />
            <span>linkedin</span>
          </a>
        </Icons>
      </NoteContainer>
    </SectionContainer>
  );
};

export default HomeNoteSection;
