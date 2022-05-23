import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './Portfolio';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

