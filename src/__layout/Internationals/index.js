import React, { useState, useEffect } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  HeaderEditorals,
  ActionOrdenation,
  NotificationList,
  EditorialsList,
  DateList,
  WrapperListInfo,
  TitleList,
  DescriptionList,
  Author,
  Pagination,
} from './styles';

import api from '../../services/api';

function Internationals() {
  const [visible, setVisible] = useState(false);
  const [catagory, setCategory] = useState('busines');
  const [renderCatagory, setRenderCatagory] = useState([]);
  const [pages, setPages] = useState(1);
  const [optionsState, setOptionState] = useState([
    'general',
    'business',
    'technology',
    'sports',
    'entertainment',
  ]);

  function handleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        const { data } = await api.get('/v2/everything', {
          params: {
            apiKey: 'accdf88fbcb1426cac56ec98d7f0d381',
            pageSize: 9,
            page: `${pages}`,
            q: `${catagory}`,
          },
        });

        const categories = data.articles;

        // Render the category seleted
        return setRenderCatagory(categories);
      } catch (error) {
        return console.log('Erro', error);
      }
    };

    fetchMyAPI();
  }, [catagory, pages]);

  // Chose the category
  function handleCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <Container>
      <HeaderEditorals>
        <h1>Internacionais</h1>
        <ActionOrdenation>
          <h2>Ordenar por:</h2>
          <button type="button" onClick={handleVisible}>
            <h3>Data</h3>
            <AiOutlineCaretDown size={18} color="#fff" />
          </button>
          {visible ? (
            <NotificationList
              visible={visible}
              onChange={(e) => handleCategory(e)}
              className="internationalCategories"
            >
              {optionsState.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </NotificationList>
          ) : null}
        </ActionOrdenation>
      </HeaderEditorals>
      <EditorialsList>
        {renderCatagory.map((option) => (
          <li key={option}>
            <DateList>
              {format(new Date(option.publishedAt), "d 'de' MMMM 'de' yyyy", {
                locale: pt,
              })}
            </DateList>
            <WrapperListInfo>
              <TitleList>{option.title}</TitleList>
              <DescriptionList>
                {option.description}
                <Author>
                  By<h3>{option.author}</h3>
                </Author>
              </DescriptionList>
            </WrapperListInfo>
            <figure>
              <img src={option.urlToImage} alt="IMAGEs" />
            </figure>
          </li>
        ))}
      </EditorialsList>

      <Pagination>
        <button
          type="button"
          disabled={pages < 2}
          onClick={() => setPages(pages - 1)}
        >
          <FaAngleDoubleLeft color="#FF0F0F" size={30} cursor="pointer" />
        </button>
        <span>Página {pages}</span>
        <button
          type="button"
          disabled={pages > 3}
          onClick={() => setPages(pages + 1)}
        >
          <FaAngleDoubleRight color="#FF0F0F" size={30} cursor="pointer" />
        </button>
      </Pagination>
    </Container>
  );
}

export default Internationals;
