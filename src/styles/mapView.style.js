import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-column-gap: 2rem;

  padding: 1rem;
`;

export const SpacesListContainer = styled.div`
  padding: 1rem;

  background-color: white;
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);

  h1 {
    font-size: 1.2rem;
  }
`;

export const Establecimiento = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 5px;

  .circle {
    width: 1rem;
    height: 1rem;

    margin-right: 0.5rem;

    border-radius: 50rem;

    background-color: ${({ color }) => color && color};
  }
`;

export const MapContainer = styled.div`
  width: 95%;
  height: 80vh;
`;
