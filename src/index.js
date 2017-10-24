
// var foo = ()=>{
//     document.getElementById('app').innerHTML = '<h3>webpack react demo! hello react</h3>';
// }
// foo();
// console.log('babel解析箭头函数')

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import getRouter from './router/router.js';

// 初始化
renderWithHotReload(getRouter());

//热更新
console.log('module',module)
if(module.hot){
    module.hot.accept('./router/router',()=>{
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    })

}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}


