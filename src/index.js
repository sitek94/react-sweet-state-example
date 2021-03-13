import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { defaults } from 'react-sweet-state';
import App from './App';

defaults.devtools = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
