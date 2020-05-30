import styled from 'styled-components';

export const Container = styled.article`
  height: auto;
  margin: 10rem 20.5rem 5rem 20.5rem;

  @media (max-width: 1024px) {
    margin: 10rem 11.5rem 5rem 11.5rem;
  }

  @media (max-width: 950px) {
    margin: 10rem 7rem 5rem 7rem;
    font-size: 60%;
  }

  @media (max-width: 900px) {
    margin: 10rem 7.5rem 5rem 7.5rem;
  }

  @media (max-width: 800px) {
    margin: 5rem 6.5rem 4rem 6.5rem;
  }

  @media (max-width: 425px) {
    margin: 3rem 3.5rem 4rem 3.5rem;
  }
`;

export const HeaderEditorals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 425px) {
      font-size: 2rem;
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
      font-size: 1rem;
      align-self: center;
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

      @media (max-width: 768px) {
        margin-right: 0;
        font-size: 1rem;
      }
    }
  }
`;

export const GridEditorial = styled.ul`
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  list-style: none;

  margin-top: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 2rem;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 40px;
    margin-bottom: 4rem;

    border-left: 3px solid red;

    @media (max-width: 900px) {
      padding: 25px;
      margin-bottom: 0;
    }

    @media (max-width: 900px) {
      padding: 20px;
      margin-bottom: 0;
    }

    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      display: block;
    }
  }
`;

export const HeaderGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateGrid = styled.div`
  font-weight: 300;
`;

export const TopicGrid = styled.div`
  font-weight: 500;
`;

export const EditInfo = styled.div`
  text-align: justify;

  h1 {
    margin: 4rem 0 1.5rem 0;
  }

  p {
    margin-bottom: 2rem;
    text-overflow: ellipsis;
  }

  a:link,
  a:visited {
    font-size: 2rem;
    text-decoration: none;
    color: black;
    font-weight: 500;
    border: none;
  }
  a:hover {
    text-decoration: none;
    color: #f00;
    transition: all 0.5s;
  }
  a:active {
    text-decoration: none;
  }
`;
