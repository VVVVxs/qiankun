import React, { useEffect } from 'react';
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

  // useEffect(() => {
  //   window.addEventListener('message', function (e) {
  //     console.log('接收到子应用消息',e.data);
  //   });
  // }, [])

  return (
    <div>
      我是主应用
      {/* <button onClick={loadChildApp}>点击加载子应用</button> */}
      <iframe src="http://localhost:8080" />
    </div>
  );
}

export default App;
