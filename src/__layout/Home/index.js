/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

import Menu from '../../components/Menu';

import { Container, HomeImage } from './styles';

import api from '../../services/api';

function Home() {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        const { data } = await api.get('/v2/top-headlines', {
          params: {
            sources: 'google-news-br',
            apiKey: 'accdf88fbcb1426cac56ec98d7f0d381',
          },
        });

        const images = data.articles;

        console.log(images);
        return setSlideImages(images);
      } catch (error) {
        return console.log('Erro', error);
      }
    };

    fetchMyAPI();
  }, []);

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Container>
      <Menu />

      <HomeImage>
        <Slide {...properties}>
          {slideImages.map((image) => (
            <div className="each-slide" key={image.content}>
              <div style={{ backgroundImage: `url(${image.urlToImage})` }} />
            </div>
          ))}
        </Slide>
      </HomeImage>
    </Container>
  );
}

export default Home;
