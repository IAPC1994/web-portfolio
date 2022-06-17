import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebPortfolio } from './WebPortfolio';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebPortfolio />
  </React.StrictMode>
);

