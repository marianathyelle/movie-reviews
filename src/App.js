import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { StateProvider } from "./state";
import { initialState, mainReducer } from "./reducers";

function App() {
  return (
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <Header />
        <Routes />
      </StateProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
