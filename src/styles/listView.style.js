import styled from "styled-components";

export const Header = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;

  margin-bottom: 0.5rem;
`;

export const Establecimiento = styled.div`
  opacity: ${({ isOpen }) => !isOpen && "0.2"};

  background-color: white;
  border-radius: 5px;

  padding: 1rem 2rem;

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
`;

export const SpacesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.2rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
  }
`;

export const ListContainer = styled.div`
  color: #718096;
`;
