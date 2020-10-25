import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerMicroApps([
  {
    name: 'support',
    entry: '//localhost:8080',
    container: '#microapp',
    activeRule: "/app2",
  }
])
start();