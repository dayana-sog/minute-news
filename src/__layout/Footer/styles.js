import styled from 'styled-components';

export const Container = styled.footer`
  background: red;

  img {
    width: 38rem;
    height: 9rem;
    margin: 3rem 0 0 5rem;

    @media (max-width: 768px) {
      width: 23rem;
      height: 5rem;
      margin: 3rem 0 0 4rem;
    }

    @media (max-width: 425px) {
      margin-left: 1rem;
      margin-top: 1.5rem;
      width: 18rem;
      height: 4rem;
    }
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    list-style-type: none;
    margin: 5rem 3rem 2rem 0;

    @media (max-width: 425px) {
      display: none;
    }

    li {
      cursor: pointer;

      &:not(:last-of-type) {
        padding-right: 5px;
        border-right: 1px solid #fff;
        margin-right: 10px;
      }
    }
  }
`;

export const Copy = styled.div`
  margin: 5rem 0 2rem 5.3rem;

  @media (max-width: 425px) {
    text-align: center;
    width: 100%;
    margin: 3rem 0 1rem 0;
  }
`;
