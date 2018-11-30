import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 页面
import Home from 'page/home/index.jsx'

class App extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
    }
    render() {
        console.log('render')
        return (
            <Home/>
        )
    }
}


ReactDOM.render(
    <App>
    </App>,
    document.getElementById('app')
);