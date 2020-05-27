import styled from 'styled-components';

export const Container = styled.article`
  height: 90vh;
  margin: 10rem 21.5rem;
`;

export const HeaderEditorals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const GridEditorial = styled.ul`
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  list-style: none;

  margin-top: 5rem;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 40px;
    margin-bottom: 5rem;

    border-left: 5px solid red;

    img {
      width: 100%;
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
