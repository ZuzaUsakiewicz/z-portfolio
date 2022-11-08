import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FlexColumnCenter,
  FlexRowCenter,
  CardShadow,
  GradientBG,
} from "./styleHelpers";
import { mediaQueries } from "./mediaQueries";

export const Container = styled(motion.section)`
  padding: 0.5rem;
  ${FlexColumnCenter};
  position: relative;
`;

export const SectionContainer = styled(motion.section)`
  padding: 2rem 0rem;
  text-align: right;
  max-width: 1200px;
  @media ${mediaQueries.laptop} {
    padding: 5rem 0;
  }
`;

export const Text = styled.p`
  padding: 0 0.5rem;
  text-align: justify;
  font-weight: ${({ theme }) => theme.typography.weight.light};
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.mdFont};
    width: 40rem;
  }
`;

export const FlexContainer = styled.section`
  padding: 0.5rem;
  ${FlexRowCenter};
`;

export const SectionTitle = styled(motion.h2)`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.lgFont};
  text-align: center;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green};
    width: 2rem;
    height: 2rem;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.xxlFont};
  }
`;

export const Subtitle = styled.h3`
  font-weight: ${({ theme }) => theme.typography.weight.light};
  font-size: ${({ theme }) => theme.typography.size.xsFont};
  text-align: center;
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.mdFont};
  }
`;

export const ButtonScrollToTop = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  ${GradientBG};
  border-radius: 50%;
  border: none;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  transform: ${({ showButton }) =>
    showButton ? "translateY(0)" : "translateY(5rem)"};
  ${FlexColumnCenter};
  z-index: 999;
  transition: transform 0.3s linear;
  ${CardShadow};
`;
