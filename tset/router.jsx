import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './index.scss'


class A extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>组件 A {this.props.match.path}</h1>
            </div>
        )
    }
}

class B extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        console.log(this.props.match)
    }
    render() {
        console.log('render')
        return (
            <div>
                <h2>组件 B</h2>
                <Switch>
                    <Route exact path={`${this.props.match.path}`} 
                    render={(route) => {
                        return (<div>不带参数组件</div>)
                    }}></Route>
                    <Route path={`${this.props.match.path}/:id`} 
                    render={(route) => {
                        return (<div>带参数组件：参数是：{route.match.params.id}</div>)
                    }}></Route>
                </Switch>
            </div>
        )
    }
}

class Wrapper extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Link to='/a'>组件A</Link>
                <br/>
                <Link to='/b/234'>带参数的组件B</Link>
                <br/>
                <Link to='/b'>组件B</Link>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path='/a' component ={A}/>
            <Route path='/b/:id' component ={B}/>
        </Wrapper>
    </Router>,
    document.getElementById('app')
);