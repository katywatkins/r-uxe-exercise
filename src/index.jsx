import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.scss';

const App = () => {
  return (
    <h1>World Traveler</h1>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
