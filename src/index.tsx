import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import { AppContext } from './AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <AppContext>
        <App />
      </AppContext>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
