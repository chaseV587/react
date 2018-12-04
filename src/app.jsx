import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Layout from 'component/layout/index.jsx'
// 页面
import Home from 'page/home/index.jsx'
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
    }
    render() {
        let LayoutRouter = (
            <Layout> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App>
    </App>,
    document.getElementById('app')
);