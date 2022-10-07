import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);
