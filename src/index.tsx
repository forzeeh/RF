import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import { store } from './store/store';

// Use different basename for development and production
const basename = import.meta.env.PROD ? '/RF' : '';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
