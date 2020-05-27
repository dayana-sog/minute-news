import React from 'react';

import Home from './__layout/Home';
import Editorials from './__layout/Editorials';
import Internationals from './__layout/Internationals';
import Footer from './__layout/Footer';

import './global.css';

function App() {
  return (
    <>
      <Home />
      <Editorials />
      <Internationals />
      <Footer />
    </>
  );
}

export default App;
