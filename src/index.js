
// var foo = ()=>{
//     document.getElementById('app').innerHTML = '<h3>webpack react demo! hello react</h3>';
// }
// foo();
// console.log('babel解析箭头函数')

import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/router.js';


ReactDom.render(
    getRouter(),
    document.getElementById('app')
)

