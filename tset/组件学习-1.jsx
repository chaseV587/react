import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

// const name = 'chase'
// let jsx = (
//     <div className="jsx">jsx...{name}</div>
// )

// ReactDOM.render(
//     jsx,
//     document.getElementById('app')
// );
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('app'));
// }

// setInterval(tick, 1000);
// 

// let nowTime = new Date().toLocaleTimeString()

// const name = 'chase'
// let jsx = (
//     <div className="jsx">jsx...{name}
//         <h2>It is {nowTime}.</h2>
//     </div>
// )
// 

function Component() {
    return <h1>I am Chase</h1>
}

class ES6Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Rosen',
            nowTime: new Date().toLocaleTimeString()
        }
    }
    render() {
        setInterval(() => {
            this.setState({
                nowTime: new Date().toLocaleTimeString()
            })

        }, 1000);
        return (
            <div>
                <h1>I am {this.state.name} in es6</h1>
                <h2>Now is {this.state.nowTime}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,
    document.getElementById('app')
);


// 事件处理

function Component() {
    return <h1>I am Chase</h1>
}

class ES6Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Rosen',
            nowTime: new Date().toLocaleTimeString(),
            age:18
        }
        this.addOneYear = this.addOneYear.bind(this)
    }
    addOneYear() {
        console.log('add one year')
        this.setState({
            age: this.state.age + 1
        })
    }
    addTwoYear() {
        this.setState({
            age: this.state.age + 2
        })
    }
    onValueChange(e) {
        this.setState({
            age: e.target.value
        })
    }
    render() {
        setInterval(() => {
            this.setState({
                nowTime: new Date().toLocaleTimeString()
            })

        }, 1000);
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <h1>I am {this.state.age}year old</h1>
                <h2>Now is {this.state.nowTime}</h2>
                <button onClick={this.addOneYear}>加 1 岁</button>
                <button onClick={(e) => {this.addTwoYear(e)}}>加 2 岁</button>
                <div>
                    <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,
    document.getElementById('app')
);