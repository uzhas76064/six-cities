import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from "react-router-dom";
import {mockOffers} from './mocks/offers';
import city from "./mocks/city";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App offers={mockOffers} city={city}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
