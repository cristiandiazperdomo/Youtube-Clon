import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { MiniNavigation } from './components/MiniNavigation/MiniNavigation';
import { Video } from './components/Video/Video';
import { CellMenu } from './components/cellMenu/CellMenu'
//import { MyContext } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <MiniNavigation />
    <Video />
    <CellMenu />
  </React.StrictMode>,
  document.getElementById('root')
);
