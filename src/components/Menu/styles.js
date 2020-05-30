import styled from 'styled-components';

export const Container = styled.div`
  height: 18rem;
  width: 100%;
  border-bottom: 5px solid red;

  position: relative;

  @media (max-width: 780px) {
    height: 13rem;
  }

  @media (max-width: 425px) {
    height: 11.5rem;
  }

  img {
    width: 38rem;
    height: 9rem;

    @media (max-width: 1300px) {
      width: 30rem;
      height: 7rem;
    }

    @media (max-width: 1080px) {
      width: 22rem;
      height: 6rem;
    }

    @media (max-width: 640px) {
      width: 16rem;
      height: 4rem;
    }

    @media (max-width: 550px) {
      width: 13rem;
      height: 4rem;
    }

    @media (max-width: 425px) {
      width: 11rem;
      height: 3rem;
    }
  }

  ul {
    font-weight: 400;
    font-size: 2.4rem;

    cursor: pointer;
    a:link,
    a:visited {
      text-decoration: none;
      color: #333;
      margin-left: 2em;

      @media (max-width: 1300px) {
        margin-left: 1.7rem;
      }

      @media (max-width: 1080px) {
        font-size: 1.8rem;
      }

      @media (max-width: 780px) {
        font-size: 1.3rem;
        margin-left: 1.5rem;
      }

      @media (max-width: 590px) {
        font-size: 1rem;
      }

      @media (max-width: 430px) {
        font-size: 0.9rem;
        margin-left: 1.2rem;
      }

      @media (max-width: 425px) {
        font-size: 0.8rem;
      }
    }
    a:hover {
      text-decoration: none;
      color: #f00;
      transition: all 0.5s;
    }
    a:active {
      text-decoration: none;
    }

    button {
      border: none;
    }
  }
`;

export const WrapperMenu = styled.div`
  height: 15rem;
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 780px) {
    height: 11rem;
  }

  @media (max-width: 425px) {
    height: 10rem;
    width: 90%;
  }
`;
