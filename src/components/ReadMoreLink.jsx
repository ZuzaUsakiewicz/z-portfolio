import { Link } from "react-router-dom";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { mediaQueries } from "../theme/mediaQueries";
import { FlexRowEnd } from "../theme/styleHelpers";

const LinkContainer = styled(Link)`
  font-size: ${({ theme }) => theme.typography.size.xsFont};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  ${FlexRowEnd};
  gap: 0.5rem;
  @media ${mediaQueries.laptop} {
    font-size: ${({ theme }) => theme.typography.size.mdFont};
    transition: opacity 0.3s linear;
    #icon {
      color: inherit;
      font-size: ${({ theme }) => theme.typography.size.lgFont};
      transition: transform 0.3s linear, color 0.3s linear;
    }
    &:hover {
      opacity: 0.9;
      #icon {
        transform: translateY(-10px) translateX(10px);
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

const ReadMoreLink = ({ children, path }) => {
  return (
    <LinkContainer to={path}>
      {children ? children : "more"}
      <BsFillArrowUpRightCircleFill id="icon" />
    </LinkContainer>
  );
};

export default ReadMoreLink;
