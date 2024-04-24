import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestUseMemo from './components/TestUseMemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const root2 = ReactDOM.createRoot(
//   document.getElementById('root2') as HTMLElement
// );
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root2.render(
//   <TestUseMemo/>
// )

