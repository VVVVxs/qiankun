import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start,setDefaultMountApp } from 'qiankun';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// setDefaultMountApp('/app2');


registerMicroApps([
  {
    name: 'support',
    entry: '//localhost:8080',
    container: '#microapp',
    activeRule: "/app2",
    props: {
      sss: '666',
    },
  }
],{
  beforeLoad:(app)=>{
    console.log('app',app);
  }
})

start();