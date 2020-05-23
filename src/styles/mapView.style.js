import styled from "styled-components";

export const OuterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-column-gap: 2rem;

  padding: 1rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
  }
`;

export const SpacesListContainer = styled.div`
  h1 {
    font-size: 1.2rem;
  }
`;

export const Establecimiento = styled.div`
  background-color: white;
  border-radius: 5px;

  padding: 1rem 2rem;
  margin-bottom: 1.2rem;

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);

  .circle {
    width: 16px;
    height: 16px;

    margin-right: 0.5rem;

    border-radius: 50rem;

    background-color: ${({ color }) => color && color};
  }
`;

export const MapContainer = styled.div`
  width: 95%;
  height: 80vh;
`;
