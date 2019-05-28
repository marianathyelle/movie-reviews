import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header/>
      </Fragment>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
