import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Video } from './components/Video/Video';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <Video />
  </React.StrictMode>,
  document.getElementById('root')
);
