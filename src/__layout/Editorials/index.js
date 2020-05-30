import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { AiOutlineCaretDown } from 'react-icons/ai';

import api from '../../services/api';

import {
  Container,
  HeaderEditorals,
  ActionOrdenation,
  GridEditorial,
  HeaderGrid,
  DateGrid,
  TopicGrid,
  EditInfo,
} from './styles';

function Editorials() {
  const [editGrid, setEditGrid] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        const { data } = await api.get('/v2/top-headlines', {
          params: {
            sources: 'google-news-br',
            apiKey: `${process.env.REACT_APP_API_KEY}`,
            pageSize: 9,
          },
        });

        const images = data.articles;

        return setEditGrid(images);
      } catch (error) {
        return console.log('Erro', error);
      }
    };

    fetchMyAPI();
  }, []);

  return (
    <Container>
      <HeaderEditorals>
        <h1>Editoriais</h1>
        <ActionOrdenation>
          <h2>Ordenar por:</h2>
          <button type="button">
            <h3>Data</h3>
            <AiOutlineCaretDown size={18} color="#fff" />
          </button>
        </ActionOrdenation>
      </HeaderEditorals>
      <GridEditorial>
        {editGrid.map((edit) => (
          <li>
            <div key={edit.content}>
              <HeaderGrid>
                <DateGrid>
                  {format(new Date(edit.publishedAt), 'dd/MM/yyyy')}
                </DateGrid>
                <TopicGrid>Governo</TopicGrid>
              </HeaderGrid>
              <figure>
                <img
                  src={edit.urlToImage}
                  alt="IMAGE1"
                  className="gallery__img"
                />
              </figure>

              <EditInfo>
                <h1>{edit.title}</h1>
                <p>{edit.content}</p>

                <a href={edit.url}>Saiba Mais</a>
              </EditInfo>
            </div>
          </li>
        ))}
      </GridEditorial>
    </Container>
  );
}

export default Editorials;
