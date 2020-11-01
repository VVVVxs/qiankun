import React, { useEffect } from 'react';
import pic from '../static/pic.jpg'

const App = (props) => {
    // useEffect(() => {
    //     window.parent.postMessage({
    //         msg: "xxx"
    //     }, 'http://localhost:3000');
    // }, [])
    useEffect(() => {

        window.bbb = 1;
        console.log('111', window.bbb);
    }, [])
    return (
        <div>
            <div>我是子应用</div>
            <img src={pic} alt="" />
        </div>
    )
}
export default App;