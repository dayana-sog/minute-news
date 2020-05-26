import styled from 'styled-components';

export const Container = styled.div`
  height: 18rem;
  width: 100%;
  border-bottom: 5px solid red;

  position: relative;

  img {
    width: 38rem;
    height: 9rem;
  }

  ul {
    margin-right: 1rem;
    font-weight: 400;
    font-size: 2.4rem;

    cursor: pointer;
    a:link,
    a:visited {
      text-decoration: none;
      color: #333;
      margin-left: 2em;
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
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(53% - 4px);
  top: calc(100% + 4px);
  background: rgba(219, 219, 219, 0.6);
  border-radius: 4px;
  border-bottom: 5px solid red;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(219, 219, 219, 0.8);
  }

  li {
    display: flex;
    justify-content: center;
    align-self: center;

    list-style-type: none;
    color: #333;

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`;
