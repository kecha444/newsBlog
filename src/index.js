import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import OneNews from './Classes/OneNews';
import NewsList from './NewsList';

ReactDOM.render(
  <React.StrictMode>
  <NewsList />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
