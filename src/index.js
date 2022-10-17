import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {ThemeProvider} from 'styled-components'
import {BrowserRouter} from "react-router-dom";

import {baseTheme} from './theme/theme';
import store from "./store";

import App from './App';
import GlobalStyles from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
          <Provider store={store}>
              <ThemeProvider theme={baseTheme}>
                  <App />
              </ThemeProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
