import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);
