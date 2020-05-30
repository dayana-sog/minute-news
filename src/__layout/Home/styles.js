import styled from 'styled-components';

export const Container = styled.main``;

export const HomeImage = styled.div`
  margin: auto;
  width: 70%;

  .each-slide > div {
    background-size: contain;
    background-repeat: no-repeat;
    height: 500px;

    @media (max-width: 870px) {
      height: 350px;
    }

    @media (max-width: 560px) {
      height: 250px;
    }

    @media (max-width: 425px) {
      height: 240px;
    }
  }
`;
