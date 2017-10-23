//路由入口
import React from 'react';
// BromserRouter作为Router的名字引入 （as） 
import {BrowserRouter, HashRouter as Router, Route, Switch, Link, hashHistory, browserHistory} from 'react-router-dom';
// import {Router, Route ,Link, hashHistory, browserHistory} from 'react-router';

import Home from '../page/Home';
import Page1 from '../page/Page1';

// console.log('page1',Page1)

// console.log('browserHistory',browserHistory)

const getRouter = ()=> 
   (
        <Router>
            <div>
                <ul>
                    <li> <Link to="/">Home页面</Link></li>
                    <li> <Link to="/page1">Page1页面</Link></li>
                </ul> 
                <Switch>
                
                    <Route exact  path="/" component={Home} ></Route>
                    <Route  path="/page1" component={Page1} ></Route>
                                      
                </Switch>                   
            </div>        
        </Router>
    )
    
console.log('router')
export default getRouter;

/*
    exact: bool
    如果为 true，path 为 '/one' 的路由将不能匹配 '/one/two'，反之，亦然。

    http://www.cnblogs.com/YZH-chengdu/p/6855237.html
*/