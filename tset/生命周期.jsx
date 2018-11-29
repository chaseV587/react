import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'


class Component extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {
            data: 'Old State'
        }
        console.log('constructor')
    }
    // 组件将要加载
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 组件加载完成
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 将要接收父组件传来的props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    // 组件是不是应该更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    updateAction() {
        console.log('更新')
        this.setState({
            data: 'New State'
        })
    }
    // 渲染
    render() {
        console.log('render')
        return (
            <div>
               <h1> Props: {this.state.data}</h1>
               <button onClick={()=>{this.updateAction()}}>更新组件</button>
            </div>
        )
    }
}

class App extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
        console.log('constructor')
    }
    onPropsChange() {
        this.setState({
            data: 'New Props'
        })
    }
    render() {
        return(
            <div>
                {
                    this.state.hsaChild ? <Component data={this.state.data}/> : null
                }
                <button onClick={()=>{this.onPropsChange()}}>改变Props</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
);