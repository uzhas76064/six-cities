import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Place} from './types/type';

const places: Place[] = [
  {
    price: 120,
    inBookmarks: false,
    rating: 5,
    photo: 'img/apartment-01.jpg',
    href: '/#',
  },{
    price: 130,
    inBookmarks: false,
    rating: 4,
    photo: 'img/apartment-02.jpg',
    href: '/#',
  },{
    price: 125,
    inBookmarks: false,
    rating: 5,
    photo: 'img/apartment-03.jpg',
    href: '/#',
  },

];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App places={places}/>
  </React.StrictMode>,
);
