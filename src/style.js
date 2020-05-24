import styled from "styled-components";

export const OuterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  @media only screen and (max-width: 1300px) {
    max-width: 68rem;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 45rem;
  }
`;
