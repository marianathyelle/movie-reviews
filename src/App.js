import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { StateProvider } from './state';

function App() {
  const initialState = {
    reviews: [],
    review: {}
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'getReviews':
        return {
          ...state,
          reviews: action.reviews
        };

      case 'getDetail': 
        return {
          ...state,
          review: state.reviews.find(item => item.display_title === action.id)
        }
        
      default:
        return state;
    }
  };

  return (
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header/>
        <Routes/>
      </StateProvider>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
