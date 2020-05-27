import styled from 'styled-components';

export const Container = styled.footer`
  background: red;

  img {
    width: 38rem;
    height: 9rem;
    margin: 3rem 21.5rem;
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #fff;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    list-style-type: none;
    margin: 5rem 21.3rem 2rem 0;

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
  margin: 5rem 0 2rem 21.3rem;
`;
