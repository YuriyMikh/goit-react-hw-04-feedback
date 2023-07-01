import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import GlobalCss from 'global.css';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalCss />
  </>
);
