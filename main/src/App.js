import React from 'react';
import { loadMicroApp } from 'qiankun';
function App() {



  const loadChildApp = () => {
    // console.log('22',loadMicroApp({
    //   name: 'micro app',
    //   entry: '//localhost:8080',
    //   container: '#microapp',
    // }));
    loadMicroApp({
      name: 'support',
      entry: '//localhost:8080',
      container: '#microapp',
    });
  }

  return (
    <div>
      我是主应用
      <button onClick={loadChildApp}>点击加载子应用</button>
    </div>
  );
}

export default App;
