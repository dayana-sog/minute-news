import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid red;
  margin: 0 9rem;

  position: relative;

  @media (max-width: 425px) {
    margin: 0 2rem;
    font-size: 1.7rem;
  }
`;

export const HeaderEditorals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4rem;
  h1 {
    font-size: 4.5rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }

    @media (max-width: 425px) {
      font-size: 2.5rem;
    }
  }
`;
export const ActionOrdenation = styled.div`
  display: flex;

  h2 {
    font-size: 3rem;
    font-weight: 300;
    margin-right: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 0.8rem;
      align-self: center;
      margin-right: 1rem;
    }
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

      @media (max-width: 425px) {
        font-size: 70%;
        margin-right: 0;
        align-self: center;
      }
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

  @media (max-width: 425px) {
    margin-top: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 3rem;

    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }

    @media (max-width: 425px) {
      flex-direction: column-reverse;
      margin-top: 2rem;
    }

    img {
      width: 300px;
      max-height: 200px;
      object-fit: contain;
      display: block;

      @media (max-width: 425px) {
        width: 335px;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const DateList = styled.div`
  max-width: 15%;
  font-size: 1.5rem;
  color: gray;

  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 29%;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    max-width: 50%;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
`;

export const WrapperListInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 70%;
    margin: 0 1rem 3rem 1.5rem;
    width: 39%;
  }

  @media (max-width: 425px) {
    margin: 0;
    width: 100%;
    text-align: justify;
  }
`;

export const TitleList = styled.div`
  font-size: 3rem;
  font-weight: 400;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
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

  @media (max-width: 425px) {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  button {
    margin: 2rem;
    border: none;
  }
`;
