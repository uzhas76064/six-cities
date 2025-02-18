import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from "react-router-dom";

const CARDS_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offersCount={CARDS_COUNT}/>
    </BrowserRouter>
  </React.StrictMode>,
);
