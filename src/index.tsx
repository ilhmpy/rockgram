import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n/i18n";

import App from './App';
import { AppContext } from './AppContext';
import { GlobalStyles } from './Globalstyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <AppContext>
        <App />
        <GlobalStyles />
      </AppContext>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
