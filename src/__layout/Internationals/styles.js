import styled from 'styled-components';

export const Container = styled.section`
  height: 90vh;
  border-top: 1px solid red;
  width: 75%;
  margin: 0 auto;

  position: relative;
`;

export const HeaderEditorals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4rem;
  h1 {
    font-size: 4.5rem;
    font-weight: 400;
  }
`;
export const ActionOrdenation = styled.div`
  display: flex;

  h2 {
    font-size: 3rem;
    font-weight: 300;
    margin-right: 3rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #333;
    border: none;
    color: #fff;
    padding: 1rem;

    text-transform: uppercase;

    h3 {
      margin-right: 2rem;
    }
  }
`;

export const NotificationList = styled.select`
  .internationalCategories {
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }

  option {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export const EditorialsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }

    margin-top: 3rem;

    img {
      width: 300px;
      max-height: 200px;
      object-fit: contain;
      display: block;
    }
  }

  aside {
    height: auto;
    width: 45%;
    background: #e6e6e6;
  }
`;

export const DateList = styled.div`
  max-width: 15%;
  font-size: 1.5rem;
  color: gray;
`;

export const WrapperListInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin-bottom: 3rem;
`;

export const TitleList = styled.div`
  font-size: 3rem;
  font-weight: 400;

  margin-bottom: 1rem;
`;

export const DescriptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  h3 {
    margin-left: 1rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  button {
    margin: 2rem;
    border: none;
  }
`;
