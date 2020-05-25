import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 28% 72%;
  grid-column-gap: 2rem;

  padding: 1rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 1100px) {
    display: inline-block;
    margin: 0 auto;

    width: 100%;
  }
`;

export const SpacesListContainer = styled.div`
  h1 {
    font-size: 1.2rem;
  }
`;

export const Establecimiento = styled.div`
  border-top: 5px solid ${({ color }) => color && color};
  opacity: ${({ isOpen }) => !isOpen && "0.2"};

  background-color: white;
  border-radius: 5px;

  padding: 1rem 2rem;
  margin-bottom: 1.2rem;

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  }
`;

export const MapContainer = styled.div`
  width: 95%;
  height: 80vh;

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;
